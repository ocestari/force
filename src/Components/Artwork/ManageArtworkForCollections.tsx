import { useToasts } from "@artsy/palette"
import {
  ResultListEntity,
  SelectListsForArtworkModalQueryRender,
  SelectListsForArtworkSaveResult,
} from "Apps/CollectorProfile/Routes/Saves2/Components/SelectListsForArtworkModal/SelectListsForArtworkModal"
import { createContext, FC, useContext, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useRouter } from "System/Router/useRouter"

export interface ManageArtworkForCollectionsState {
  artworkId: string | null
  savedListId?: string
  isSavedToList: boolean
  setArtworkId: (artworkId: string) => void
  clearArtworkId: () => void
}

interface ProviderProps {
  savedListId?: string
}

export const ManageArtworkForCollections = createContext<
  ManageArtworkForCollectionsState
>((null as unknown) as ManageArtworkForCollectionsState)

export const useManageArtworkForCollectionsContext = () => {
  return useContext(ManageArtworkForCollections)
}

/**
 *
 * If `savedListId` was passed, it means the user is on the saves page
 * In this case, whether the artwork is saved or not will depend on the local state (not on the status received from backend)
 *
 * https://artsy.net/collector-profile/saves2
 */
export const ManageArtworkForCollectionsProvider: FC<ProviderProps> = ({
  children,
  savedListId,
}) => {
  const [artworkEntityId, setArtworkEntityId] = useState<string | null>(null)
  const [isSavedToList, setIsSavedToList] = useState(!!savedListId)

  const { t } = useTranslation()
  const { sendToast } = useToasts()
  const { router } = useRouter()

  const setArtworkId = (artworkId: string) => {
    setArtworkEntityId(artworkId)
  }

  const clearArtworkId = () => {
    setArtworkEntityId(null)
  }

  const value: ManageArtworkForCollectionsState = useMemo(
    () => ({
      artworkId: artworkEntityId,
      savedListId,
      isSavedToList,
      setArtworkId,
      clearArtworkId,
    }),
    [artworkEntityId, savedListId, isSavedToList]
  )

  const navigateToSaveListById = (listId: string) => {
    router.push(`/collector-profile/saves2/${listId}`)
  }

  const navigateToSaves = () => {
    router.push(`/collector-profile/saves2`)
  }

  const showToastForAddedLists = (addedLists: ResultListEntity[]) => {
    if (addedLists.length === 1) {
      const list = addedLists[0]

      sendToast({
        variant: "success",
        message: t("collectorSaves.toasts.addedArtworkToList", {
          name: list.name,
        }),
        action: {
          label: t("collectorSaves.toasts.viewListButton"),
          onClick: () => {
            navigateToSaveListById(list.id)
          },
        },
      })

      return
    }

    sendToast({
      variant: "success",
      message: t("collectorSaves.toasts.addedArtworkToLists", {
        count: addedLists.length,
      }),
      action: {
        label: t("collectorSaves.toasts.viewSavesButton"),
        onClick: () => {
          navigateToSaves()
        },
      },
    })
  }

  const showToastForRemovedLists = (removedLists: ResultListEntity[]) => {
    if (removedLists.length === 1) {
      const list = removedLists[0]

      sendToast({
        variant: "message",
        message: t("collectorSaves.toasts.removedArtworkFromList", {
          name: list.name,
        }),
      })

      return
    }

    sendToast({
      variant: "message",
      message: t("collectorSaves.toasts.removedArtworkFromLists", {
        count: removedLists.length,
      }),
    })
  }

  const handleSaveCollectionsForArtwork = (
    result: SelectListsForArtworkSaveResult
  ) => {
    const { selectedListIds, addedLists, removedLists } = result

    if (savedListId) {
      setIsSavedToList(selectedListIds.includes(savedListId))
      sendToast({
        variant: "success",
        message: t("collectorSaves.toasts.changesSaved"),
      })

      return
    }

    if (addedLists.length > 0) {
      showToastForAddedLists(addedLists)
    }

    if (removedLists.length > 0) {
      showToastForRemovedLists(removedLists)
    }
  }

  return (
    <>
      <ManageArtworkForCollections.Provider value={value}>
        {children}
      </ManageArtworkForCollections.Provider>

      {!!artworkEntityId && (
        <SelectListsForArtworkModalQueryRender
          artworkID={artworkEntityId}
          onClose={clearArtworkId}
          onSave={handleSaveCollectionsForArtwork}
        />
      )}
    </>
  )
}
