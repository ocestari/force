import { graphql } from "react-relay"
import { setupTestWrapperTL } from "DevTools/setupTestWrapper"
import { screen } from "@testing-library/react"
import { CollectorProfileSaves2Route_Test_Query } from "__generated__/CollectorProfileSaves2Route_Test_Query.graphql"
import { CollectorProfileSaves2RouteFragmentContainer } from "Apps/CollectorProfile/Routes/Saves2/CollectorProfileSaves2Route"
import { useRouter } from "System/Router/useRouter"

jest.unmock("react-relay")
jest.mock("System/Router/useRouter")

const { renderWithRelay } = setupTestWrapperTL<
  CollectorProfileSaves2Route_Test_Query
>({
  Component: CollectorProfileSaves2RouteFragmentContainer,
  query: graphql`
    query CollectorProfileSaves2Route_Test_Query @relay_test_operation {
      me {
        ...CollectorProfileSaves2Route_me
      }
    }
  `,
})

describe("CollectorProfileSaves2Route", () => {
  const mockUseRouter = useRouter as jest.Mock

  beforeEach(() => {
    mockUseRouter.mockImplementation(() => ({
      match: {
        params: {},
      },
    }))
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it("should render collections", () => {
    renderWithRelay({
      CollectionsConnection: () => collectionsConnection,
    })

    expect(screen.getByText("Collection One")).toBeInTheDocument()
    expect(screen.getByText("Collection Two")).toBeInTheDocument()
    expect(screen.getByText("Collection Three")).toBeInTheDocument()
  })

  describe("Selected State", () => {
    it("should render the first collection as selected when collection id is NOT passed in url", () => {
      renderWithRelay({
        CollectionsConnection: () => collectionsConnection,
      })

      const selectedElement = getCurrentCollectionElement()
      expect(selectedElement).toHaveTextContent("Collection One")
    })

    it("should render the corresponding collection as selected when collection id is passed in url", () => {
      mockUseRouter.mockImplementation(() => ({
        match: {
          params: {
            id: "collection-two-id",
          },
        },
      }))

      renderWithRelay({
        CollectionsConnection: () => collectionsConnection,
      })

      const selectedElement = getCurrentCollectionElement()
      expect(selectedElement).toHaveTextContent("Collection Two")
    })
  })
})

const getCurrentCollectionElement = () => {
  return screen.getAllByRole("link").find(element => {
    const attribute = element.getAttribute("aria-current")

    return attribute === "true"
  })
}

const collectionsConnection = {
  edges: [
    {
      node: {
        internalID: "collection-one-id",
        name: "Collection One",
      },
    },
    {
      node: {
        internalID: "collection-two-id",
        name: "Collection Two",
      },
    },
    {
      node: {
        internalID: "collection-three-id",
        name: "Collection Three",
      },
    },
  ],
}
