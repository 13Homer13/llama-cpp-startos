import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11277:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11277. The embeddings API now accepts typed vision, audio, and video content. Improves model loading speed and Intel Vulkan performance. Fixes incorrect Vulkan results when matrix multiplication reads a slice of a larger cache and JSON-schema responses with Muse Glimmer.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b11223...b11277`,
    es_ES: `Actualiza llama.cpp a la compilación b11277. La API de embeddings ahora acepta contenido tipado de imagen, audio y vídeo. Mejora la velocidad de carga de modelos y el rendimiento de Vulkan en Intel. Corrige resultados incorrectos de Vulkan cuando la multiplicación de matrices lee una sección de una caché más grande y las respuestas con esquema JSON de Muse Glimmer.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b11223...b11277`,
    de_DE: `Aktualisiert llama.cpp auf Build b11277. Die Embeddings-API akzeptiert jetzt typisierte Bild-, Audio- und Videoinhalte. Verbessert die Ladegeschwindigkeit von Modellen und die Vulkan-Leistung auf Intel-GPUs. Behebt falsche Vulkan-Ergebnisse beim Lesen eines Ausschnitts aus einem größeren Cache durch eine Matrixmultiplikation sowie JSON-Schema-Antworten mit Muse Glimmer.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b11223...b11277`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11277. API embeddings przyjmuje teraz typowane treści obrazu, dźwięku i wideo. Przyspiesza ładowanie modeli i poprawia wydajność Vulkan na układach Intel. Naprawia błędne wyniki Vulkan, gdy mnożenie macierzy odczytuje fragment większej pamięci podręcznej, oraz odpowiedzi zgodne ze schematem JSON w Muse Glimmer.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b11223...b11277`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11277. L'API des embeddings accepte désormais les contenus typés image, audio et vidéo. Accélère le chargement des modèles et améliore les performances Vulkan sur Intel. Corrige des résultats Vulkan incorrects lorsque la multiplication matricielle lit une partie d'un cache plus grand ainsi que les réponses conformes à un schéma JSON avec Muse Glimmer.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b11223...b11277`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
