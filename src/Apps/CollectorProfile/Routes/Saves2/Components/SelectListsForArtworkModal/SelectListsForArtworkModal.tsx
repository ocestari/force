import React, { FC, useState } from "react"
import { Spacer, Join, ModalDialog, Text } from "@artsy/palette"
import { SelectListItemFragmentContainer } from "Apps/CollectorProfile/Routes/Saves2/Components/SelectListsForArtworkModal/SelectListItem"
import { SelectListsForArtworkHeaderFragmentContainer } from "Apps/CollectorProfile/Routes/Saves2/Components/SelectListsForArtworkModal/SelectListsForArtworkHeader"
import { SelectListsForArtworkFooter } from "Apps/CollectorProfile/Routes/Saves2/Components/SelectListsForArtworkModal/SelectListsForArtworkFooter"
import { SystemQueryRenderer } from "System/Relay/SystemQueryRenderer"
import { createFragmentContainer, graphql } from "react-relay"
import { SelectListsForArtworkModal_me$data } from "__generated__/SelectListsForArtworkModal_me.graphql"
import { SelectListsForArtworkModal_artwork$data } from "__generated__/SelectListsForArtworkModal_artwork.graphql"
import { SelectListsForArtworkModalQuery } from "__generated__/SelectListsForArtworkModalQuery.graphql"
import { extractNodes } from "Utils/extractNodes"
import { SelectListsPlaceholder } from "Apps/CollectorProfile/Routes/Saves2/Components/SelectListsForArtworkModal/SelectListsForArtworkPlaceholders"

interface SelectListsForArtworkModalQueryRenderProps {
  artworkID: string
  onClose: () => void
}

export interface SelectListsForArtworkModalProps {
  me: SelectListsForArtworkModal_me$data | null
  artwork: SelectListsForArtworkModal_artwork$data | null
  onClose: () => void
}

export const SelectListsForArtworkModal: React.FC<SelectListsForArtworkModalProps> = ({
  me,
  artwork,
  onClose,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const collections = extractNodes(me?.collectionsConnection)

  const handleItemSelected = (selectedId: string) => {
    if (selectedIds.includes(selectedId)) {
      const updatedSelectedIds = selectedIds.filter(id => id !== selectedId)

      setSelectedIds(updatedSelectedIds)
      return
    }

    setSelectedIds([...selectedIds, selectedId])
  }

  const handleSaveClicked = () => {
    onClose()
  }

  const renderContent = () => {
    // Query is in progress
    if (me === null) {
      return <SelectListsPlaceholder />
    }

    return (
      <Join separator={<Spacer y={1} />}>
        {collections.map(item => {
          const isSelected = selectedIds.includes(item.internalID)

          return (
            <SelectListItemFragmentContainer
              item={item}
              isSelected={isSelected}
              onClick={handleItemSelected}
            />
          )
        })}
      </Join>
    )
  }

  return (
    <ModalDialog
      title="Select lists for this artwork"
      onClose={onClose}
      onClick={event => {
        event.preventDefault()
      }}
      dialogProps={{
        width: ["100%", 700],
        height: ["100%", "auto"],
        maxHeight: [null, 800],
      }}
      m={0}
      header={
        artwork === null ? (
          <Text>Placeholder</Text>
        ) : (
          <SelectListsForArtworkHeaderFragmentContainer artwork={artwork} />
        )
      }
      footer={
        <SelectListsForArtworkFooter
          selectedListsCount={selectedIds.length}
          onSaveClick={handleSaveClicked}
        />
      }
    >
      {renderContent()}
    </ModalDialog>
  )
}

const SelectListsForArtworkModalFragmentContainer = createFragmentContainer(
  SelectListsForArtworkModal,
  {
    me: graphql`
      fragment SelectListsForArtworkModal_me on Me {
        collectionsConnection(first: 30) {
          edges {
            node {
              internalID
              ...SelectListItem_item
            }
          }
        }
      }
    `,
    artwork: graphql`
      fragment SelectListsForArtworkModal_artwork on Artwork {
        ...SelectListsForArtworkHeader_artwork
      }
    `,
  }
)

export const SelectListsForArtworkModalQueryRender: FC<SelectListsForArtworkModalQueryRenderProps> = ({
  artworkID,
  ...rest
}) => {
  return (
    <SystemQueryRenderer<SelectListsForArtworkModalQuery>
      query={query}
      variables={{ artworkID }}
      render={({ props, error }) => {
        if (error) {
          console.error(error)
          return null
        }

        return (
          <SelectListsForArtworkModalFragmentContainer
            me={props?.me ?? null}
            artwork={props?.artwork ?? null}
            {...rest}
          />
        )
      }}
    />
  )
}

const query = graphql`
  query SelectListsForArtworkModalQuery($artworkID: String!) {
    me {
      ...SelectListsForArtworkModal_me
    }
    artwork(id: $artworkID) {
      ...SelectListsForArtworkModal_artwork
    }
  }
`
