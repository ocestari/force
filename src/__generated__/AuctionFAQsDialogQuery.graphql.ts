/**
 * @generated SignedSource<<7b7273ea85d5dfdf8e7a0f66dd8c7c9c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionFAQsDialogQuery$variables = {};
export type AuctionFAQsDialogQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"AuctionFAQsDialog_viewer">;
  } | null;
};
export type AuctionFAQsDialogQuery = {
  response: AuctionFAQsDialogQuery$data;
  variables: AuctionFAQsDialogQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "format",
        "value": "HTML"
      }
    ],
    "kind": "ScalarField",
    "name": "content",
    "storageKey": "content(format:\"HTML\")"
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuctionFAQsDialogQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionFAQsDialog_viewer"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuctionFAQsDialogQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": "bidding",
            "args": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "how-auctions-work-bidding"
              }
            ],
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": (v0/*: any*/),
            "storageKey": "page(id:\"how-auctions-work-bidding\")"
          },
          {
            "alias": "buyersPremium",
            "args": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "how-auctions-work-buyers-premium-taxes-and-fees"
              }
            ],
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": (v0/*: any*/),
            "storageKey": "page(id:\"how-auctions-work-buyers-premium-taxes-and-fees\")"
          },
          {
            "alias": "paymentsAndShipping",
            "args": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "how-auctions-work-payments-and-shipping"
              }
            ],
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": (v0/*: any*/),
            "storageKey": "page(id:\"how-auctions-work-payments-and-shipping\")"
          },
          {
            "alias": "emailsAndAlerts",
            "args": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "how-auctions-work-emails-and-alerts"
              }
            ],
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": (v0/*: any*/),
            "storageKey": "page(id:\"how-auctions-work-emails-and-alerts\")"
          },
          {
            "alias": "conditionsOfSale",
            "args": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "how-auctions-work-conditions-of-sale"
              }
            ],
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": (v0/*: any*/),
            "storageKey": "page(id:\"how-auctions-work-conditions-of-sale\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e61b366ed4c49c5fe929b34bb71e216a",
    "id": null,
    "metadata": {},
    "name": "AuctionFAQsDialogQuery",
    "operationKind": "query",
    "text": "query AuctionFAQsDialogQuery {\n  viewer {\n    ...AuctionFAQsDialog_viewer\n  }\n}\n\nfragment AuctionFAQsDialog_viewer on Viewer {\n  bidding: page(id: \"how-auctions-work-bidding\") {\n    name\n    content(format: HTML)\n    id\n  }\n  buyersPremium: page(id: \"how-auctions-work-buyers-premium-taxes-and-fees\") {\n    name\n    content(format: HTML)\n    id\n  }\n  paymentsAndShipping: page(id: \"how-auctions-work-payments-and-shipping\") {\n    name\n    content(format: HTML)\n    id\n  }\n  emailsAndAlerts: page(id: \"how-auctions-work-emails-and-alerts\") {\n    name\n    content(format: HTML)\n    id\n  }\n  conditionsOfSale: page(id: \"how-auctions-work-conditions-of-sale\") {\n    name\n    content(format: HTML)\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6694e8dad93ca4f573070fe11f696181";

export default node;
