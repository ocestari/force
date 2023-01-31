import { Box, Flex, Text } from "@artsy/palette"
import { FourUpImageLayout } from "Apps/CollectorProfile/Routes/Saves2/Components/FourUpImageLayout"
import { StackedImageLayout } from "Apps/CollectorProfile/Routes/Saves2/Components/StackedImageLayout"
import { FC } from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { extractNodes } from "Utils/extractNodes"
import { SavesItem_item$data } from "__generated__/SavesItem_item.graphql"

const ITEM_DROP_SHADOW = "0px 2px 12px rgba(0, 0, 0, 0.13)"

interface SavesItemProps {
  isSelected?: boolean
  imagesLayout: "stacked" | "grid"
  item: SavesItem_item$data
  onClick: () => void
}

const SavesItem: FC<SavesItemProps> = ({
  isSelected,
  imagesLayout,
  item,
  onClick,
}) => {
  const artworkNodes = extractNodes(item.artworksConnection)
  const imageEntities = artworkNodes.map(node => node.image?.cropped ?? null)

  return (
    <Flex
      p={1}
      width={[138, 222]}
      height={[188, 272]}
      border="1px solid"
      borderRadius={10}
      flexDirection="column"
      justifyContent="space-between"
      borderColor={isSelected ? "brand" : "transparent"}
      style={isSelected ? { boxShadow: ITEM_DROP_SHADOW } : undefined}
      onClick={onClick}
    >
      {imagesLayout === "stacked" ? (
        <StackedImageLayout imageEntities={imageEntities} />
      ) : (
        <FourUpImageLayout imageEntities={imageEntities} />
      )}

      <Box>
        <Text variant={["xs", "sm-display"]} overflowEllipsis>
          {item.name}
        </Text>
        <Text variant={["xs", "sm-display"]} color="black60" overflowEllipsis>
          {`${item.artworksCount} Artworks`}
        </Text>
      </Box>
    </Flex>
  )
}

export const SavesItemFragmentContainer = createFragmentContainer(SavesItem, {
  item: graphql`
    fragment SavesItem_item on Collection {
      name
      artworksCount
      artworksConnection(first: 4) {
        edges {
          node {
            image {
              cropped(version: "square", width: 190, height: 190) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `,
})
