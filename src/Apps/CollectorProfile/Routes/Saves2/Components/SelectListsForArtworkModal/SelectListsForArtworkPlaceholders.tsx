import { Flex, Join, SkeletonBox, SkeletonText, Spacer } from "@artsy/palette"

export const SelectListsForArtworkHeaderPlaceholder = () => {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Flex flex={1} flexDirection="row" alignItems="center">
        <SkeletonBox width={50} height={50} />
        <Spacer x={1} />
        <SkeletonText>Artwork Title, 2022</SkeletonText>
      </Flex>

      <Spacer x={1} />

      <SkeletonBox width={130} height={30} />
    </Flex>
  )
}

export const SelectListItemPlaceholder = () => {
  return (
    <Flex p={1} flexDirection="row" alignItems="center">
      <SkeletonBox width={60} height={60} />

      <Spacer x={1} />

      <Flex flex={1} flexDirection="column">
        <SkeletonText variant="sm-display">Collection Name</SkeletonText>
        <SkeletonText variant="sm-display">6 artworks</SkeletonText>
      </Flex>

      <Spacer x={1} />

      <SkeletonBox width={24} height={24} borderRadius={24} />
    </Flex>
  )
}

export const SelectListsPlaceholder = () => {
  return (
    <Join separator={<Spacer y={1} />}>
      <SelectListItemPlaceholder />
      <SelectListItemPlaceholder />
      <SelectListItemPlaceholder />
    </Join>
  )
}
