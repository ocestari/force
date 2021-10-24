/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SettingsAuctionsRoute_me = {
    readonly name: string | null;
    readonly lotStandings: ReadonlyArray<{
        readonly isLeadingBidder: boolean | null;
        readonly activeBid: {
            readonly id: string;
        } | null;
        readonly saleArtwork: {
            readonly lotLabel: string | null;
            readonly highestBid: {
                readonly display: string | null;
            } | null;
            readonly counts: {
                readonly bidderPositions: number | null;
            } | null;
            readonly artwork: {
                readonly title: string | null;
                readonly href: string | null;
                readonly image: {
                    readonly url: string | null;
                } | null;
                readonly artist: {
                    readonly name: string | null;
                } | null;
            } | null;
        } | null;
    } | null> | null;
    readonly myBids: {
        readonly closed: ReadonlyArray<{
            readonly sale: {
                readonly name: string | null;
                readonly href: string | null;
            } | null;
        } | null> | null;
    } | null;
    readonly saleRegistrationsConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly isRegistered: boolean | null;
                readonly sale: {
                    readonly name: string | null;
                    readonly href: string | null;
                    readonly id: string;
                    readonly isClosed: boolean | null;
                    readonly startAt: string | null;
                } | null;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "SettingsAuctionsRoute_me";
};
export type SettingsAuctionsRoute_me$data = SettingsAuctionsRoute_me;
export type SettingsAuctionsRoute_me$key = {
    readonly " $data"?: SettingsAuctionsRoute_me$data;
    readonly " $fragmentRefs": FragmentRefs<"SettingsAuctionsRoute_me">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SettingsAuctionsRoute_me",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "LotStanding",
      "kind": "LinkedField",
      "name": "lotStandings",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isLeadingBidder",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "BidderPosition",
          "kind": "LinkedField",
          "name": "activeBid",
          "plural": false,
          "selections": [
            (v1/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleArtwork",
          "kind": "LinkedField",
          "name": "saleArtwork",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lotLabel",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SaleArtworkHighestBid",
              "kind": "LinkedField",
              "name": "highestBid",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "display",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SaleArtworkCounts",
              "kind": "LinkedField",
              "name": "counts",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "bidderPositions",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "artwork",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                (v2/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Image",
                  "kind": "LinkedField",
                  "name": "image",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Artist",
                  "kind": "LinkedField",
                  "name": "artist",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/)
                  ],
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
      "concreteType": "MyBids",
      "kind": "LinkedField",
      "name": "myBids",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MyBid",
          "kind": "LinkedField",
          "name": "closed",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Sale",
              "kind": "LinkedField",
              "name": "sale",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v2/*: any*/)
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
      "args": [
        {
          "kind": "Literal",
          "name": "registered",
          "value": false
        }
      ],
      "concreteType": "SaleRegistrationConnection",
      "kind": "LinkedField",
      "name": "saleRegistrationsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleRegistrationEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SaleRegistration",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "isRegistered",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Sale",
                  "kind": "LinkedField",
                  "name": "sale",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    (v2/*: any*/),
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "isClosed",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "startAt",
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
        }
      ],
      "storageKey": "saleRegistrationsConnection(registered:false)"
    }
  ],
  "type": "Me"
};
})();
(node as any).hash = '8c7d151810fe45d027b58a04f5e7e02a';
export default node;
