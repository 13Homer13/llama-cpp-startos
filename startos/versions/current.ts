import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11243:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11243. The embeddings API now accepts typed vision, audio, and video content. Fixes incorrect Vulkan results when matrix multiplication reads a slice of a larger cache.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b11223...b11243`,
    es_ES: `Actualiza llama.cpp a la compilación b11243. La API de embeddings ahora acepta contenido tipado de imagen, audio y vídeo. Corrige resultados incorrectos de Vulkan cuando la multiplicación de matrices lee una sección de una caché más grande.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b11223...b11243`,
    de_DE: `Aktualisiert llama.cpp auf Build b11243. Die Embeddings-API akzeptiert jetzt typisierte Bild-, Audio- und Videoinhalte. Behebt falsche Vulkan-Ergebnisse, wenn eine Matrixmultiplikation einen Ausschnitt aus einem größeren Cache liest.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b11223...b11243`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11243. API embeddings przyjmuje teraz typowane treści obrazu, dźwięku i wideo. Naprawia błędne wyniki Vulkan, gdy mnożenie macierzy odczytuje fragment większej pamięci podręcznej.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b11223...b11243`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11243. L'API des embeddings accepte désormais les contenus typés image, audio et vidéo. Corrige des résultats Vulkan incorrects lorsque la multiplication matricielle lit une partie d'un cache plus grand.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b11223...b11243`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
