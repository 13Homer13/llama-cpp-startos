import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11206:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11206. Adds support for OpenAI-style video URLs and Ling 3.0 VL models. Fixes a token-counting API crash while the server sleeps and LFM2 audio preprocessing.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b11065...b11206`,
    es_ES: `Actualiza llama.cpp a la compilación b11206. Añade compatibilidad con URL de vídeo al estilo de OpenAI y con los modelos Ling 3.0 VL. Corrige un fallo de la API de recuento de tokens cuando el servidor está inactivo y el preprocesamiento de audio de LFM2.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b11065...b11206`,
    de_DE: `Aktualisiert llama.cpp auf Build b11206. Unterstützt Video-URLs im OpenAI-Stil und Ling-3.0-VL-Modelle. Behebt einen Absturz der Tokenzähl-API im Ruhezustand des Servers und einen Fehler bei der LFM2-Audiovorverarbeitung.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b11065...b11206`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11206. Dodaje obsługę adresów URL filmów w stylu OpenAI i modeli Ling 3.0 VL. Naprawia awarię API liczenia tokenów, gdy serwer jest uśpiony, oraz błąd wstępnego przetwarzania dźwięku LFM2.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b11065...b11206`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11206. Ajoute la prise en charge des URL vidéo au format OpenAI et des modèles Ling 3.0 VL. Corrige un plantage de l'API de comptage des jetons lorsque le serveur est en veille et un défaut du prétraitement audio LFM2.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b11065...b11206`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
