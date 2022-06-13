import {
  BlueChipIcon,
  Box,
  Column,
  CSSGrid,
  GridColumns,
  Spacer,
  Text,
} from "@artsy/palette"
import { FC } from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { extractNodes } from "v2/Utils/extractNodes"
import { ArtistInsightsBadges_artist } from "v2/__generated__/ArtistInsightsBadges_artist.graphql"

interface ArtistInsightsBadgesProps {
  artist: ArtistInsightsBadges_artist
}

const ARTIST_BADGES_TEMPLATE = {
  ACTIVE_SECONDARY_MARKET: {
    title: "Active Secondary Market",
    description: "Recent auction results in the Artsy Price Database.",
  },
  BLUE_CHIP_REPRESENTATION: {
    title: "Blue Chip Representation",
    description: "Represented by internationally reputable galleries.",
  },
  CRITICALLY_ACCLAIMED: {
    title: "Critically Acclaimed",
    description: "Recognized by major institutions and publications.",
  },
  ARTSY_VANGUARD: {
    title: "The Artsy Vanguard",
    description:
      "Featured in Artsy's annual list of the most promising artists working today.",
  },
  HIGH_AUCTION_RECORD: {
    title: "High Auction Record",
  },
}

interface ArtistBadgeProps {
  badgeType: string
  description?: string
}

export const ArtistBadge: FC<ArtistBadgeProps> = ({
  badgeType,
  description,
}) => {
  return (
    <CSSGrid gridTemplateColumns="auto 1fr" gridTemplateRows="auto 1fr">
      <Box
        style={{ gridArea: "1 / 1 / 2 / 2" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <BlueChipIcon mr={0.5} fill="blue100" />
      </Box>
      <Text
        variant="sm"
        color="blue100"
        style={{ gridArea: "1 / 2 / 2 / 3" }}
        display="flex"
        alignItems="center"
      >
        {ARTIST_BADGES_TEMPLATE[badgeType].title}
      </Text>
      <Text color="black60" style={{ gridArea: "2 / 2 / 3 / 3" }}>
        {description ?? ARTIST_BADGES_TEMPLATE[badgeType].description}
      </Text>
    </CSSGrid>
  )
}

export const ArtistInsightsBadges: FC<ArtistInsightsBadgesProps> = ({
  artist,
}) => {
  if (!artist.insights) {
    return null
  }

  if (!artist.artistHighlights) {
    return null
  }

  if (!artist.auctionResultsConnection) {
    return null
  }

  const blueChipRepresentation = extractNodes(
    artist.artistHighlights.partnersConnection
  )

  const highAuctionResult = extractNodes(artist.auctionResultsConnection)[0]
  const highAuctionRecord = highAuctionResult
    ? `${highAuctionResult.price_realized?.display}, ${highAuctionResult.organization}, ${highAuctionResult.sale_date}`
    : null

  return (
    <>
      <Text variant="lg-display" color="black100">
        Artist Badges
      </Text>
      <Spacer mb={4} />
      <GridColumns>
        {blueChipRepresentation.length > 0 && (
          <Column span={6}>
            <ArtistBadge badgeType="BLUE_CHIP_REPRESENTATION" />
          </Column>
        )}

        {highAuctionRecord && (
          <Column span={6}>
            <ArtistBadge
              badgeType="HIGH_AUCTION_RECORD"
              description={highAuctionRecord}
            />
          </Column>
        )}
      </GridColumns>
    </>
  )
}

export const ArtistInsightsBadgesFragmentContainer = createFragmentContainer(
  ArtistInsightsBadges,
  {
    artist: graphql`
      fragment ArtistInsightsBadges_artist on Artist {
        insights {
          type
          label
          entities
        }
        auctionResultsConnection(
          recordsTrusted: true
          first: 1
          sort: PRICE_AND_DATE_DESC
        ) {
          edges {
            node {
              price_realized: priceRealized {
                display(format: "0.0a")
              }
              organization
              sale_date: saleDate(format: "YYYY")
            }
          }
        }
        artistHighlights: highlights {
          partnersConnection(first: 1, partnerCategory: ["blue-chip"]) {
            edges {
              node {
                categories {
                  slug
                }
              }
            }
          }
        }
      }
    `,
  }
)
