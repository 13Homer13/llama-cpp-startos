import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11312:2',
  releaseNotes: {
    en_US: `Set Model now lists the models already downloaded to your box, so a model you fetched before can be selected again without retyping its HuggingFace repo or re-downloading it. Models matching a curated preset are already in the list and are not duplicated.`,
    es_ES: `«Establecer modelo» ahora muestra los modelos ya descargados en su dispositivo, de modo que un modelo descargado antes se puede volver a seleccionar sin reescribir su repositorio de HuggingFace ni volver a descargarlo. Los modelos que coinciden con un preset ya están en la lista y no se duplican.`,
    de_DE: `„Modell festlegen“ listet jetzt die bereits heruntergeladenen Modelle auf, sodass ein zuvor heruntergeladenes Modell erneut ausgewählt werden kann, ohne sein HuggingFace-Repository erneut einzugeben oder es erneut herunterzuladen. Modelle, die einem kuratierten Preset entsprechen, stehen bereits in der Liste und werden nicht dupliziert.`,
    pl_PL: `Akcja „Ustaw model” wyświetla teraz modele już pobrane na urządzenie, więc wcześniej pobrany model można wybrać ponownie bez wpisywania jego repozytorium HuggingFace i ponownego pobierania. Modele odpowiadające wyselekcjonowanym presetom są już na liście i nie są duplikowane.`,
    fr_FR: `« Définir le modèle » liste désormais les modèles déjà téléchargés sur votre appareil, de sorte qu’un modèle téléchargé auparavant peut être resélectionné sans ressaisir son dépôt HuggingFace ni le retélécharger. Les modèles correspondant à un préréglage figurent déjà dans la liste et ne sont pas dupliqués.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
