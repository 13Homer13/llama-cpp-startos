import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11312:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11312. Adds support for GLM-5.3-Flash models. Fixes out-of-bounds GPU memory writes with IQ4_NL models on NVIDIA and AMD GPUs, and integer overflows when parsing GGUF model files.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
    es_ES: `Actualiza llama.cpp a la compilación b11312. Añade compatibilidad con los modelos GLM-5.3-Flash. Corrige escrituras fuera de límites en la memoria de la GPU con modelos IQ4_NL en GPU NVIDIA y AMD, y desbordamientos de enteros al analizar archivos de modelo GGUF.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
    de_DE: `Aktualisiert llama.cpp auf Build b11312. Fügt Unterstützung für GLM-5.3-Flash-Modelle hinzu. Behebt Schreibzugriffe außerhalb der Grenzen des GPU-Speichers bei IQ4_NL-Modellen auf NVIDIA- und AMD-GPUs sowie Ganzzahlüberläufe beim Einlesen von GGUF-Modelldateien.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11312. Dodaje obsługę modeli GLM-5.3-Flash. Naprawia zapisy poza granicami pamięci GPU przy modelach IQ4_NL na kartach NVIDIA i AMD oraz przepełnienia liczb całkowitych podczas parsowania plików modeli GGUF.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11312. Ajoute la prise en charge des modèles GLM-5.3-Flash. Corrige des écritures hors limites dans la mémoire GPU avec les modèles IQ4_NL sur les GPU NVIDIA et AMD, ainsi que des dépassements d'entiers lors de l'analyse des fichiers de modèle GGUF.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b11277...b11312`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
