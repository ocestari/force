/**
 * @generated SignedSource<<cd7f7355f85ce0b6cf45a0f8826df06b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistConsignRoute_Test_Query$variables = {
  artistID: string;
};
export type ArtistConsignRoute_Test_Query$data = {
  readonly artist: {
    readonly targetSupply: {
      readonly isInMicrofunnel: boolean | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"ArtistConsignRoute_artist">;
  } | null;
};
export type ArtistConsignRoute_Test_Query$rawResponse = {
  readonly artist: {
    readonly name: string | null;
    readonly href: string | null;
    readonly targetSupply: {
      readonly microfunnel: {
        readonly artworksConnection: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly image: {
                readonly imageURL: string | null;
                readonly resized: {
                  readonly width: number | null;
                  readonly height: number | null;
                  readonly url: string;
                } | null;
                readonly url: string | null;
                readonly aspectRatio: number;
              } | null;
              readonly id: string;
              readonly imageTitle: string | null;
              readonly title: string | null;
              readonly href: string | null;
              readonly is_saved: boolean | null;
              readonly date: string | null;
              readonly sale_message: string | null;
              readonly cultural_maker: string | null;
              readonly artists: ReadonlyArray<{
                readonly id: string;
                readonly href: string | null;
                readonly name: string | null;
              } | null> | null;
              readonly collecting_institution: string | null;
              readonly partner: {
                readonly name: string | null;
                readonly href: string | null;
                readonly id: string;
                readonly type: string | null;
              } | null;
              readonly sale: {
                readonly is_auction: boolean | null;
                readonly is_closed: boolean | null;
                readonly id: string;
                readonly is_live_open: boolean | null;
                readonly is_open: boolean | null;
                readonly is_preview: boolean | null;
                readonly display_timely_at: string | null;
              } | null;
              readonly sale_artwork: {
                readonly counts: {
                  readonly bidder_positions: Int | null;
                } | null;
                readonly highest_bid: {
                  readonly display: string | null;
                } | null;
                readonly opening_bid: {
                  readonly display: string | null;
                } | null;
                readonly id: string;
              } | null;
              readonly is_inquireable: boolean | null;
              readonly internalID: string;
              readonly slug: string;
              readonly is_biddable: boolean | null;
              readonly realizedPrice: string | null;
            } | null;
          } | null> | null;
        } | null;
        readonly metadata: {
          readonly roundedViews: string | null;
          readonly roundedUniqueVisitors: string | null;
          readonly highestRealized: string | null;
          readonly str: string | null;
          readonly realized: string | null;
        } | null;
      } | null;
      readonly isInMicrofunnel: boolean | null;
    } | null;
    readonly id: string;
  } | null;
};
export type ArtistConsignRoute_Test_Query = {
  variables: ArtistConsignRoute_Test_Query$variables;
  response: ArtistConsignRoute_Test_Query$data;
  rawResponse: ArtistConsignRoute_Test_Query$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isInMicrofunnel",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v9 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistConsignRoute_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistConsignRoute_artist"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistTargetSupply",
            "kind": "LinkedField",
            "name": "targetSupply",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtistConsignRoute_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistTargetSupply",
            "kind": "LinkedField",
            "name": "targetSupply",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtistTargetSupplyMicrofunnel",
                "kind": "LinkedField",
                "name": "microfunnel",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtworkConnection",
                    "kind": "LinkedField",
                    "name": "artworksConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtworkEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": "imageURL",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "version",
                                        "value": "medium"
                                      }
                                    ],
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": "url(version:\"medium\")"
                                  },
                                  {
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "height",
                                        "value": 395
                                      }
                                    ],
                                    "concreteType": "ResizedImageUrl",
                                    "kind": "LinkedField",
                                    "name": "resized",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "width",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "height",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "url",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": "resized(height:395)"
                                  },
                                  {
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "version",
                                        "value": "larger"
                                      }
                                    ],
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": "url(version:\"larger\")"
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "aspectRatio",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "imageTitle",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "title",
                                "storageKey": null
                              },
                              (v4/*: any*/),
                              {
                                "alias": "is_saved",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isSaved",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "date",
                                "storageKey": null
                              },
                              {
                                "alias": "sale_message",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "saleMessage",
                                "storageKey": null
                              },
                              {
                                "alias": "cultural_maker",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "culturalMaker",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": (v6/*: any*/),
                                "concreteType": "Artist",
                                "kind": "LinkedField",
                                "name": "artists",
                                "plural": true,
                                "selections": [
                                  (v5/*: any*/),
                                  (v4/*: any*/),
                                  (v3/*: any*/)
                                ],
                                "storageKey": "artists(shallow:true)"
                              },
                              {
                                "alias": "collecting_institution",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "collectingInstitution",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": (v6/*: any*/),
                                "concreteType": "Partner",
                                "kind": "LinkedField",
                                "name": "partner",
                                "plural": false,
                                "selections": [
                                  (v3/*: any*/),
                                  (v4/*: any*/),
                                  (v5/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "type",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "partner(shallow:true)"
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Sale",
                                "kind": "LinkedField",
                                "name": "sale",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": "is_auction",
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isAuction",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "is_closed",
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isClosed",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/),
                                  {
                                    "alias": "is_live_open",
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isLiveOpen",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "is_open",
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isOpen",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "is_preview",
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isPreview",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "display_timely_at",
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "displayTimelyAt",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "sale_artwork",
                                "args": null,
                                "concreteType": "SaleArtwork",
                                "kind": "LinkedField",
                                "name": "saleArtwork",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "SaleArtworkCounts",
                                    "kind": "LinkedField",
                                    "name": "counts",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": "bidder_positions",
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "bidderPositions",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "highest_bid",
                                    "args": null,
                                    "concreteType": "SaleArtworkHighestBid",
                                    "kind": "LinkedField",
                                    "name": "highestBid",
                                    "plural": false,
                                    "selections": (v7/*: any*/),
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "opening_bid",
                                    "args": null,
                                    "concreteType": "SaleArtworkOpeningBid",
                                    "kind": "LinkedField",
                                    "name": "openingBid",
                                    "plural": false,
                                    "selections": (v7/*: any*/),
                                    "storageKey": null
                                  },
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "is_inquireable",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isInquireable",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "internalID",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "slug",
                                "storageKey": null
                              },
                              {
                                "alias": "is_biddable",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isBiddable",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "realizedPrice",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TargetSupplyMicrofunnelMetadata",
                    "kind": "LinkedField",
                    "name": "metadata",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "roundedViews",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "roundedUniqueVisitors",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "highestRealized",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "str",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "realized",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "72869e6bdb1064ffe6ebae25fd42ac52",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "artist.href": (v8/*: any*/),
        "artist.id": (v9/*: any*/),
        "artist.name": (v8/*: any*/),
        "artist.targetSupply": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistTargetSupply"
        },
        "artist.targetSupply.isInMicrofunnel": (v10/*: any*/),
        "artist.targetSupply.microfunnel": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistTargetSupplyMicrofunnel"
        },
        "artist.targetSupply.microfunnel.artworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConnection"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdge"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.artists": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Artist"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.artists.href": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.artists.id": (v9/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.artists.name": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.collecting_institution": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.cultural_maker": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.date": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.href": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.id": (v9/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.image.imageURL": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.image.resized.height": (v11/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.image.resized.url": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.image.resized.width": (v11/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.image.url": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.imageTitle": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.internalID": (v9/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.is_biddable": (v10/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.is_inquireable": (v10/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.is_saved": (v10/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.partner.href": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.partner.id": (v9/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.partner.name": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.partner.type": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.realizedPrice": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale.display_timely_at": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale.id": (v9/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale.is_auction": (v10/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale.is_closed": (v10/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale.is_live_open": (v10/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale.is_open": (v10/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale.is_preview": (v10/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_artwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_artwork.counts.bidder_positions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_artwork.highest_bid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkHighestBid"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_artwork.highest_bid.display": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_artwork.id": (v9/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_artwork.opening_bid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkOpeningBid"
        },
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_artwork.opening_bid.display": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.sale_message": (v8/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.slug": (v9/*: any*/),
        "artist.targetSupply.microfunnel.artworksConnection.edges.node.title": (v8/*: any*/),
        "artist.targetSupply.microfunnel.metadata": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TargetSupplyMicrofunnelMetadata"
        },
        "artist.targetSupply.microfunnel.metadata.highestRealized": (v8/*: any*/),
        "artist.targetSupply.microfunnel.metadata.realized": (v8/*: any*/),
        "artist.targetSupply.microfunnel.metadata.roundedUniqueVisitors": (v8/*: any*/),
        "artist.targetSupply.microfunnel.metadata.roundedViews": (v8/*: any*/),
        "artist.targetSupply.microfunnel.metadata.str": (v8/*: any*/)
      }
    },
    "name": "ArtistConsignRoute_Test_Query",
    "operationKind": "query",
    "text": "query ArtistConsignRoute_Test_Query(\n  $artistID: String!\n) {\n  artist(id: $artistID) {\n    ...ArtistConsignRoute_artist\n    targetSupply {\n      isInMicrofunnel\n    }\n    id\n  }\n}\n\nfragment ArtistConsignFAQ_artist on Artist {\n  href\n}\n\nfragment ArtistConsignHeaderImages_artist on Artist {\n  targetSupply {\n    microfunnel {\n      artworksConnection {\n        edges {\n          node {\n            image {\n              resized(height: 395) {\n                width\n                height\n                url\n              }\n            }\n            ...FillwidthItem_artwork\n            id\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment ArtistConsignHeader_artist on Artist {\n  ...ArtistConsignHeaderImages_artist\n  name\n  href\n}\n\nfragment ArtistConsignHowToSell_artist on Artist {\n  href\n}\n\nfragment ArtistConsignMarketTrends_artist on Artist {\n  href\n  targetSupply {\n    microfunnel {\n      metadata {\n        highestRealized\n        str\n        realized\n      }\n    }\n  }\n}\n\nfragment ArtistConsignMeta_artist on Artist {\n  name\n  href\n  targetSupply {\n    microfunnel {\n      artworksConnection {\n        edges {\n          node {\n            image {\n              imageURL: url(version: \"medium\")\n            }\n            id\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment ArtistConsignPageViews_artist on Artist {\n  name\n  targetSupply {\n    microfunnel {\n      metadata {\n        roundedViews\n        roundedUniqueVisitors\n      }\n    }\n  }\n}\n\nfragment ArtistConsignRecentlySold_artist on Artist {\n  targetSupply {\n    microfunnel {\n      artworksConnection {\n        edges {\n          node {\n            ...FillwidthItem_artwork\n            realizedPrice\n            id\n          }\n        }\n      }\n    }\n  }\n  name\n}\n\nfragment ArtistConsignRoute_artist on Artist {\n  ...ArtistConsignMeta_artist\n  ...ArtistConsignHeader_artist\n  ...ArtistConsignRecentlySold_artist\n  ...ArtistConsignPageViews_artist\n  ...ArtistConsignMarketTrends_artist\n  ...ArtistConsignHowToSell_artist\n  ...ArtistConsignFAQ_artist\n  ...ArtistConsignSellArt_artist\n}\n\nfragment ArtistConsignSellArt_artist on Artist {\n  href\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment FillwidthItem_artwork on Artwork {\n  image {\n    url(version: \"larger\")\n    aspectRatio\n  }\n  imageTitle\n  title\n  href\n  is_saved: isSaved\n  ...Metadata_artwork\n  ...SaveButton_artwork\n  ...Badge_artwork\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment SaveButton_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n"
  }
};
})();

(node as any).hash = "42cf0707f1cbe13c21f212715f0877c7";

export default node;
