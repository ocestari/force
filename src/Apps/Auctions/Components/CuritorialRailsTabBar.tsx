import { Join, Spacer, Tab, Tabs } from "@artsy/palette"
import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { CuritorialRailsTabBar_viewer$data } from "__generated__/CuritorialRailsTabBar_viewer.graphql"
import { AuctionsZeroState } from "./AuctionsZeroState"
import { MyBidsFragmentContainer } from "./MyBids/MyBids"
import { StandoutLotsRailFragmentContainer } from "./StandoutLotsRail"
import { TrendingLotsRailFragmentContainer } from "./TrendingLotsRail"
import { WorksByArtistsYouFollowRailFragmentContainer } from "./WorksByArtistsYouFollowRail"

interface CuritorialRailsTabBarProps {
  viewer: CuritorialRailsTabBar_viewer$data
}

export const CuritorialRailsTabBar: React.FC<CuritorialRailsTabBarProps> = ({
  viewer,
}) => {
  const showWorksForYouTab = !!viewer.followedArtistsInAuction?.counts?.total

  return (
    <Tabs mb={4}>
      {showWorksForYouTab && (
        <Tab name="Works For You">
          <Join separator={<Spacer mt={2} />}>
            {/* @ts-ignore RELAY UPGRADE 13 */}
            <MyBidsFragmentContainer me={viewer.me!} />
            {/* @ts-ignore RELAY UPGRADE 13 */}
            <WorksByArtistsYouFollowRailFragmentContainer viewer={viewer} />
          </Join>
        </Tab>
      )}
      <Tab name="Current Highlights">
        {/* @ts-ignore RELAY UPGRADE 13 */}
        <StandoutLotsRailFragmentContainer viewer={viewer} />
      </Tab>
      <Tab name="Trending Lots">
        {/* @ts-ignore RELAY UPGRADE 13 */}
        <TrendingLotsRailFragmentContainer viewer={viewer} />
      </Tab>
    </Tabs>
  )
}

export const CuritorialRailsTabBarFragmentContainer = createFragmentContainer(
  CuritorialRailsTabBar,
  {
    viewer: graphql`
      fragment CuritorialRailsTabBar_viewer on Viewer {
        ...WorksByArtistsYouFollowRail_viewer
        ...TrendingLotsRail_viewer
        ...StandoutLotsRail_viewer

        followedArtistsInAuction: saleArtworksConnection(
          includeArtworksByFollowedArtists: true
          isAuction: true
          liveSale: true
          first: 1
        ) {
          counts {
            total
          }
        }

        me {
          ...MyBids_me
        }
      }
    `,
  }
)

export const CuratorialRailsZeroState: React.FC = () => {
  return <AuctionsZeroState>No Works To Show</AuctionsZeroState>
}
