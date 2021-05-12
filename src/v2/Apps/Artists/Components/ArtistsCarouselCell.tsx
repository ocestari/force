import { ContextModule } from "@artsy/cohesion"
import { Box, Image, Text } from "@artsy/palette"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { RouterLink } from "v2/Artsy/Router/RouterLink"
import { FollowArtistButtonQueryRenderer } from "v2/Components/FollowButton/FollowArtistButton"
import { ArtistsCarouselCell_featuredLink } from "v2/__generated__/ArtistsCarouselCell_featuredLink.graphql"

const getSlug = (href: string) => {
  const components = href.split("/")
  return components[components.indexOf("artist") + 1]
}

interface ArtistsCarouselCellProps {
  featuredLink: ArtistsCarouselCell_featuredLink
  index: number
}

const ArtistsCarouselCell: React.FC<ArtistsCarouselCellProps> = ({
  featuredLink,
  index,
}) => {
  const { image } = featuredLink

  if (!image) return null

  const slug = getSlug(featuredLink.href)

  return (
    <>
      <RouterLink
        key={featuredLink.internalID}
        to={featuredLink.href}
        style={{ display: "block", textDecoration: "none" }}
      >
        <Image
          src={image.thumb.src}
          srcSet={image.thumb.srcSet}
          width={image.thumb.width}
          height={image.thumb.height}
          alt={featuredLink.title}
          lazyLoad
        />
      </RouterLink>

      <Box
        my={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        // TODO: Figure out why the button isn't displaying partially during loading.
        // Set height to height of button for now to prevent layout-shift.
        height={50}
      >
        <RouterLink
          key={featuredLink.internalID}
          to={featuredLink.href}
          style={{ display: "block", textDecoration: "none" }}
          aria-label={featuredLink.title}
        >
          <Text variant="lg">{featuredLink.title}</Text>

          {featuredLink.subtitle && (
            <Text variant="md" color="black60">
              {featuredLink.subtitle}
            </Text>
          )}
        </RouterLink>

        <FollowArtistButtonQueryRenderer
          id={slug}
          contextModule={ContextModule.featuredArtistsRail}
          buttonProps={{ variant: "secondaryOutline" }}
        />
      </Box>
    </>
  )
}

export const ArtistsCarouselCellFragmentContainer = createFragmentContainer(
  ArtistsCarouselCell,
  {
    featuredLink: graphql`
      fragment ArtistsCarouselCell_featuredLink on FeaturedLink {
        internalID
        title
        subtitle
        href
        image {
          thumb: cropped(width: 600, height: 450, version: "wide") {
            width
            height
            src
            srcSet
          }
        }
      }
    `,
  }
)
