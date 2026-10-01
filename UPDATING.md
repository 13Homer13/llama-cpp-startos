# Updating the upstream version

This package wraps [`ggml-org/llama.cpp`](https://github.com/ggml-org/llama.cpp), specifically its prebuilt `llama-server` container images published at `ghcr.io/ggml-org/llama.cpp`.

Every merged commit gets a monotonic build number `bNNNN` and a GitHub **pre-release** of that name — dozens a day. Upstream also cuts **stable releases**, tagged `vX.Y.Z`, every week or two; each one is the same commit as one of the builds. This package tracks stable releases only, and pins the build number of the commit the release points at. Each server image is published in four variants:

| Variant   | Image tag                                        | Arches       |
| --------- | ------------------------------------------------ | ------------ |
| `generic` | `ghcr.io/ggml-org/llama.cpp:server-bNNNN`        | amd64, arm64 |
| `nvidia`  | `ghcr.io/ggml-org/llama.cpp:server-cuda-bNNNN`   | amd64, arm64 |
| `rocm`    | `ghcr.io/ggml-org/llama.cpp:server-rocm-bNNNN`   | amd64        |
| `vulkan`  | `ghcr.io/ggml-org/llama.cpp:server-vulkan-bNNNN` | amd64, arm64 |

All four variants are cut from the same upstream commit and bump together.

## Determining the upstream version

**Upstream moved only when a new stable `vX.Y.Z` release resolves to a build newer than the one pinned in `startos/manifest/index.ts`.** A newer `bNNNN` pre-release is never a reason to bump, however many have landed. `gh release view` with no tag skips pre-releases, so it returns the latest stable release; resolve it to its build:

```sh
TAG=$(gh release view -R ggml-org/llama.cpp --json tagName -q .tagName)
SHA=$(gh api "repos/ggml-org/llama.cpp/commits/$TAG" --jq .sha)
BUILD=$(git ls-remote --tags https://github.com/ggml-org/llama.cpp 'refs/tags/b*' \
  | awk -v s="$SHA" '$1==s {sub("refs/tags/","",$2); print $2}')
echo "$TAG = $BUILD"
```

If `BUILD` is not greater than the current `upstreamBuild`, there is no update. Otherwise **confirm all four variants exist for it** — a partial publish would break only some build targets, and a missing image is not caught at pack time; it fails CI with `failed to resolve reference ... not found`:

```sh
for variant in '' 'cuda-' 'rocm-' 'vulkan-'; do
  printf 'server-%s%s: ' "$variant" "$BUILD"
  docker manifest inspect "ghcr.io/ggml-org/llama.cpp:server-${variant}${BUILD}" >/dev/null 2>&1 \
    && echo OK || echo MISSING
done
```

If any variant is `MISSING`, don't bump; the release's images are still publishing.

> [!NOTE]
> **A raw `curl` against `ghcr.io/v2/.../manifests/<tag>` needs an `Accept` header.** These images are OCI indexes; without an `Accept` naming the index media types, GHCR answers `MANIFEST_UNKNOWN` even for tags that exist — reporting the known-good current pin as missing. If you must use `curl` rather than `docker manifest inspect`, send:
>
> ```sh
> TOKEN=$(curl -s "https://ghcr.io/token?scope=repository:ggml-org/llama.cpp:pull" | jq -r .token)
> curl -sH "Authorization: Bearer $TOKEN" \
>   -H "Accept: application/vnd.oci.image.index.v1+json,application/vnd.docker.distribution.manifest.list.v2+json" \
>   "https://ghcr.io/v2/ggml-org/llama.cpp/manifests/server-${BUILD}" | jq -r '.errors[0].code // "ok"'
> ```

## Applying the bump

1. Update `const upstreamBuild` in `startos/manifest/index.ts` to the stable release's build tag (e.g. `'b11146'` for `v0.5.0`) — the one you confirmed all four variants for above.
2. Bump `version` + `releaseNotes` in `startos/versions/current.ts`. Edit in place — the file name stays `current.ts`; spin off a new file only if the bump needs a migration.
3. Read the release notes of every stable release since the last pin for breaking flag/server-API changes that might invalidate the presets in `startos/actions/presets.ts` — `llama-server` does occasionally rename flags. Link the release (`https://github.com/ggml-org/llama.cpp/releases/tag/vX.Y.Z`) from `releaseNotes`.
4. Build and verify at least the `generic` variant: `make generic`.
