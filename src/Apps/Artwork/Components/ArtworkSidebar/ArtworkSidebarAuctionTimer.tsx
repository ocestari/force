import { Spacer } from "@artsy/palette"
import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { AuctionTimerFragmentContainer } from "Components/AuctionTimer"
import { LotTimerFragmentContainer } from "./LotTimer"
import { lotIsClosed } from "../../Utils/lotIsClosed"
import { ArtworkSidebarAuctionTimer_artwork$data } from "__generated__/ArtworkSidebarAuctionTimer_artwork.graphql"

interface ArtworkSidebarAuctionTimerProps {
  artwork: ArtworkSidebarAuctionTimer_artwork$data
}

export const ArtworkSidebarAuctionTimer: React.FC<ArtworkSidebarAuctionTimerProps> = ({
  artwork,
}) => {
  const { sale, saleArtwork } = artwork

  return (
    <>
      {sale &&
        saleArtwork &&
        !lotIsClosed(sale, saleArtwork) &&
        (sale?.cascadingEndTimeIntervalMinutes ? (
          <>
            <Spacer mt={2} />
            {/* @ts-ignore RELAY UPGRADE 13 */}
            <LotTimerFragmentContainer saleArtwork={saleArtwork} />
          </>
        ) : (
          <>
            <Spacer mt={2} />
            {/* @ts-ignore RELAY UPGRADE 13 */}
            <AuctionTimerFragmentContainer sale={sale} />
          </>
        ))}
    </>
  )
}

export const ArtworkSidebarAuctionTimerFragmentContainer = createFragmentContainer(
  ArtworkSidebarAuctionTimer,
  {
    artwork: graphql`
      fragment ArtworkSidebarAuctionTimer_artwork on Artwork {
        internalID
        sale {
          cascadingEndTimeIntervalMinutes
          isClosed
          ...AuctionTimer_sale
          startAt
        }
        saleArtwork {
          ...LotTimer_saleArtwork
          endAt
        }
      }
    `,
  }
)
