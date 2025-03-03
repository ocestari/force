import { setupTestWrapperTL } from "DevTools/setupTestWrapper"
import { graphql } from "react-relay"
import { ArtistAuctionResultItemFragmentContainer } from "Apps/Artist/Routes/AuctionResults/ArtistAuctionResultItem"
import { ArtistAuctionResultItemTestQuery } from "__generated__/ArtistAuctionResultItemTestQuery.graphql"
import { screen } from "@testing-library/react"
import { useSystemContext } from "System"

jest.unmock("react-relay")

jest.mock("System/useSystemContext")
jest.mock("System/Router/useRouter", () => ({
  useRouter: () => ({ match: { location: { pathname: "anything" } } }),
}))

describe("ArtistAuctionResultItem", () => {
  const { renderWithRelay } = setupTestWrapperTL<
    ArtistAuctionResultItemTestQuery
  >({
    Component: (props: any) => {
      const result = props.artist?.auctionResultsConnection?.edges?.[0]?.node

      return (
        <ArtistAuctionResultItemFragmentContainer
          auctionResult={result}
          filtersAtDefault={false}
          {...props}
        />
      )
    },
    query: graphql`
      query ArtistAuctionResultItemTestQuery {
        artist(id: "andy-warhol") {
          auctionResultsConnection(first: 1) {
            edges {
              node {
                ...ArtistAuctionResultItem_auctionResult
              }
            }
          }
        }
      }
    `,
  })

  beforeEach(() => {
    ;(useSystemContext as jest.Mock).mockImplementation(() => ({ user: null }))
  })

  it("renders the auction result data", () => {
    renderWithRelay(mockResolver, false)

    expect(
      screen.getByText("Neuschwanstein (Feldmann & Schellmann 372), 1987")
    ).toBeInTheDocument()
    expect(
      screen.getAllByText(
        "Offset lithographic poster with screenprint in colours, on wove paper"
      ).length
    ).toBe(2)
    expect(screen.getByText("Bonhams • Athens")).toBeInTheDocument()
    expect(
      screen.getByText("Contemporary Art Evening Sale")
    ).toBeInTheDocument()
    expect(screen.getByText("Lot 33")).toBeInTheDocument()

    expect(screen.queryByText("Andy Warhol")).not.toBeInTheDocument()
  })

  describe("when showArtistName is true", () => {
    it("renders artist name with the auction result data", () => {
      renderWithRelay(mockResolver, false, { showArtistName: true })

      expect(screen.getAllByText("Andy Warhol").length).toBe(2)
      expect(
        screen.getByText("Neuschwanstein (Feldmann & Schellmann 372)")
      ).toBeInTheDocument()
      expect(screen.getByText(", 1987")).toBeInTheDocument()
      expect(
        screen.getAllByText(
          "Offset lithographic poster with screenprint in colours, on wove paper"
        ).length
      ).toBe(2)
      expect(screen.getByText("Bonhams • Athens")).toBeInTheDocument()
      expect(
        screen.getByText("Contemporary Art Evening Sale")
      ).toBeInTheDocument()
      expect(screen.getByText("Lot 33")).toBeInTheDocument()
    })
  })

  describe("Awaiting results", () => {
    beforeEach(() => {
      ;(useSystemContext as jest.Mock).mockImplementation(() => ({
        user: { name: "Logged In", email: "loggedin@example.com" },
      }))
    })

    it("renders awaiting results when the auction result is in last with no price", () => {
      const lastMonth = new Date().setDate(new Date().getDate() - 1)
      const lastMonthISO = new Date(lastMonth).toISOString()

      renderWithRelay(
        { AuctionResult: () => ({ ...auctionResult, saleDate: lastMonthISO }) },
        false
      )

      expect(screen.getAllByText("Awaiting results")).toHaveLength(2)
    })

    it("renders price not available when the auction result is over a month with no price", () => {
      renderWithRelay(mockResolver, false)

      expect(screen.getAllByText("Price not available")).toHaveLength(2)
    })
  })
})

const auctionResult = {
  title: "Neuschwanstein (Feldmann & Schellmann 372)",
  dimension_text: "62.0 x 91.0 cm",
  organization: "Bonhams",
  artist: {
    name: "Andy Warhol",
  },
  mediumText:
    "Offset lithographic poster with screenprint in colours, on wove paper",
  categoryText: "Print",
  date_text: "1987",
  saleDate: "2022-09-21T00:00:00.000Z",
  saleTitle: "Contemporary Art Evening Sale",
  location: "Athens",
  lotNumber: "33",
  boughtIn: false,
  isUpcoming: false,
  price_realized: { display: null },
}

const mockResolver = { AuctionResult: () => auctionResult }
