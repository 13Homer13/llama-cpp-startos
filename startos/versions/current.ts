import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11312:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11312.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
    es_ES: `Actualiza llama.cpp a la compilación b11312.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
    de_DE: `Aktualisiert llama.cpp auf Build b11312.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11312.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11312.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
