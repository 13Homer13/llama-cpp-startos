import { lstat, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { sdk } from './sdk'

// llama-server's LLAMA_CACHE (see main.ts), as seen from the action.
export const cacheDir = sdk.volumes.main.subpath('models')

// llama.cpp stores `-hf` downloads in the HuggingFace hub layout
// (common/hf-cache.cpp): `models--<org>--<repo>/` holding `blobs/` (the
// weights) and `snapshots/<commit>/<file>` symlinks into them. Deleting a
// snapshot file frees nothing, so a model is deleted as its whole repo
// folder. Loose `*.gguf` files are the flat layout of older builds.
export const repoPrefix = 'models--'

export const isCacheEntry = (name: string) =>
  name.startsWith(repoPrefix) || name.endsWith('.gguf')

export const entryLabel = (name: string) =>
  name.startsWith(repoPrefix)
    ? name.slice(repoPrefix.length).replaceAll('--', '/')
    : name

export const repoFolderName = (repo: string) =>
  repoPrefix + repo.replaceAll('/', '--')

export async function readdirSafe(path: string): Promise<string[]> {
  try {
    return await readdir(path)
  } catch (e: any) {
    if (e.code === 'ENOENT') return []
    throw e
  }
}

async function diskUsage(path: string): Promise<number> {
  const stat = await lstat(path)
  if (!stat.isDirectory()) return stat.size
  let total = 0
  for (const child of await readdir(path)) {
    total += await diskUsage(join(path, child))
  }
  return total
}

export async function listCacheEntries(): Promise<
  { name: string; bytes: number }[]
> {
  const entries = []
  for (const name of (await readdirSafe(cacheDir))
    .filter(isCacheEntry)
    .sort()) {
    entries.push({ name, bytes: await diskUsage(join(cacheDir, name)) })
  }
  return entries
}

export type CachedModel = { repo: string; file: string }

// Every GGUF a cached repo has on disk, deduplicated across snapshot
// commits. The repo folder encodes only the repo, not the quant, so the
// file has to be passed explicitly (`-hff`) to reuse the downloaded weights
// instead of letting llama-server fetch a different quant.
export async function listCachedModels(): Promise<CachedModel[]> {
  const cached: CachedModel[] = []
  for (const name of (await readdirSafe(cacheDir))
    .filter((n) => n.startsWith(repoPrefix))
    .sort()) {
    const repo = entryLabel(name)
    const snapshots = join(cacheDir, name, 'snapshots')
    const files = new Set<string>()
    for (const commit of await readdirSafe(snapshots)) {
      for (const file of await readdirSafe(join(snapshots, commit))) {
        if (file.toLowerCase().endsWith('.gguf')) files.add(file)
      }
    }
    for (const file of Array.from(files).sort()) cached.push({ repo, file })
  }
  return cached
}

export function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let value = bytes
  let unit = 0
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024
    unit++
  }
  return `${value.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`
}
