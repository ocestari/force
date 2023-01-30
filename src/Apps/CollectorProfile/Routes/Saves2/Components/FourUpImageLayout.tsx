import { Box, Flex, Image, Spacer } from "@artsy/palette"
import { prepareImageURLs } from "Apps/CollectorProfile/Routes/Saves2/Utils/prepareImageURLs"
import { FC } from "react"

interface FourUpImageLayoutProps {
  imageURLs: string[]
}

interface RowImageProps {
  url: string | null
}

const LARGE_IMAGE_SIZE = 100
const SMALL_IMAGE_SIZE = 58
const IMAGE_OFFSET = "2px"

export const FourUpImageLayout: FC<FourUpImageLayoutProps> = ({
  imageURLs,
}) => {
  const preparedImageURLs = prepareImageURLs(imageURLs)

  return (
    <Box>
      <Flex flexDirection="row">
        <RowImage url={preparedImageURLs[0]} />
        <Spacer x={IMAGE_OFFSET} />
        <RowImage url={preparedImageURLs[1]} />
      </Flex>

      <Spacer y={IMAGE_OFFSET} />

      <Flex flexDirection="row">
        <RowImage url={preparedImageURLs[2]} />
        <Spacer x={IMAGE_OFFSET} />
        <RowImage url={preparedImageURLs[3]} />
      </Flex>
    </Box>
  )
}

const RowImage: FC<RowImageProps> = ({ url }) => {
  const SIZE = [SMALL_IMAGE_SIZE, LARGE_IMAGE_SIZE]

  if (url === null) {
    return <Box width={SIZE} height={SIZE} bg="black10" />
  }

  return <Image width={SIZE} height={SIZE} preventRightClick src={url} />
}
