/**
 * @generated SignedSource<<ece19b3885bf82fb2f0e113af6203fbb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
export type CommerceOrderSourceEnum = "artwork_page" | "inquiry" | "private_sale" | "%future added value";
export type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "IN_REVIEW" | "PENDING" | "PROCESSING_APPROVAL" | "REFUNDED" | "SUBMITTED" | "%future added value";
export type OfferTestQuery$variables = {};
export type OfferTestQuery$data = {
  readonly order: {
    readonly " $fragmentSpreads": FragmentRefs<"Offer_order">;
  } | null;
};
export type OfferTestQuery$rawResponse = {
  readonly order: {
    readonly __typename: "CommerceOfferOrder";
    readonly __isCommerceOrder: "CommerceOfferOrder";
    readonly buyerTotal: string | null;
    readonly code: string;
    readonly currencyCode: string;
    readonly id: string;
    readonly internalID: string;
    readonly isInquiryOrder: boolean;
    readonly itemsTotal: string | null;
    readonly lastOffer: {
      readonly amount: string | null;
      readonly amountCents: number;
      readonly buyerTotal: string | null;
      readonly buyerTotalCents: number | null;
      readonly fromParticipant: CommerceOrderParticipantEnum | null;
      readonly id: string;
      readonly internalID: string;
      readonly note: string | null;
      readonly shippingTotal: string | null;
      readonly shippingTotalCents: number | null;
      readonly taxTotal: string | null;
      readonly taxTotalCents: number | null;
    } | null;
    readonly lineItems: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly artwork: {
            readonly editionSets: ReadonlyArray<{
              readonly id: string;
              readonly internalID: string;
            } | null> | null;
            readonly id: string;
            readonly isPriceRange: boolean | null;
            readonly listPrice: {
              readonly __typename: "Money";
              readonly major: number;
            } | {
              readonly __typename: "PriceRange";
              readonly maxPrice: {
                readonly major: number;
              } | null;
              readonly minPrice: {
                readonly major: number;
              } | null;
            } | {
              readonly __typename: string;
            } | null;
            readonly price: string | null;
            readonly priceCurrency: string | null;
            readonly shippingOrigin: string | null;
            readonly slug: string;
          } | null;
          readonly artworkOrEditionSet: {
            readonly __typename: "Artwork";
            readonly __isNode: "Artwork";
            readonly displayPriceRange: boolean | null;
            readonly id: string;
            readonly price: string | null;
          } | {
            readonly __typename: "EditionSet";
            readonly __isNode: "EditionSet";
            readonly displayPriceRange: boolean | null;
            readonly id: string;
            readonly price: string | null;
          } | {
            readonly __typename: string;
            readonly __isNode: string;
            readonly id: string;
          } | null;
          readonly artworkVersion: {
            readonly artistNames: string | null;
            readonly date: string | null;
            readonly id: string;
            readonly image: {
              readonly resized_ArtworkSummaryItem: {
                readonly url: string;
              } | null;
            } | null;
            readonly title: string | null;
          } | null;
          readonly id: string;
          readonly selectedShippingQuote: {
            readonly id: string;
            readonly typeName: string;
          } | null;
          readonly shippingQuoteOptions: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly id: string;
                readonly isSelected: boolean;
              } | null;
            } | null> | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
    readonly mode: CommerceOrderModeEnum | null;
    readonly myLastOffer: {
      readonly amount: string | null;
      readonly amountCents: number;
      readonly buyerTotal: string | null;
      readonly buyerTotalCents: number | null;
      readonly fromParticipant: CommerceOrderParticipantEnum | null;
      readonly id: string;
      readonly internalID: string;
      readonly note: string | null;
      readonly shippingTotal: string | null;
      readonly shippingTotalCents: number | null;
      readonly taxTotal: string | null;
      readonly taxTotalCents: number | null;
    } | null;
    readonly paymentMethodDetails: {
      readonly __typename: "BankAccount";
      readonly id: string;
    } | {
      readonly __typename: "CreditCard";
      readonly id: string;
    } | {
      readonly __typename: "WireTransfer";
      readonly isManualPayment: boolean;
    } | {
      readonly __typename: string;
    } | null;
    readonly requestedFulfillment: {
      readonly __typename: string;
    } | null;
    readonly sellerDetails: {
      readonly __typename: "Partner";
      readonly __isNode: "Partner";
      readonly id: string;
      readonly name: string | null;
    } | {
      readonly __typename: string;
      readonly __isNode: string;
      readonly id: string;
    } | null;
    readonly shippingTotal: string | null;
    readonly shippingTotalCents: number | null;
    readonly source: CommerceOrderSourceEnum;
    readonly state: CommerceOrderStateEnum;
    readonly taxTotal: string | null;
    readonly taxTotalCents: number | null;
    readonly totalListPriceCents: number;
  } | {
    readonly __typename: string;
    readonly __isCommerceOrder: string;
    readonly buyerTotal: string | null;
    readonly code: string;
    readonly currencyCode: string;
    readonly id: string;
    readonly internalID: string;
    readonly itemsTotal: string | null;
    readonly lineItems: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly artwork: {
            readonly editionSets: ReadonlyArray<{
              readonly id: string;
              readonly internalID: string;
            } | null> | null;
            readonly id: string;
            readonly isPriceRange: boolean | null;
            readonly listPrice: {
              readonly __typename: "Money";
              readonly major: number;
            } | {
              readonly __typename: "PriceRange";
              readonly maxPrice: {
                readonly major: number;
              } | null;
              readonly minPrice: {
                readonly major: number;
              } | null;
            } | {
              readonly __typename: string;
            } | null;
            readonly price: string | null;
            readonly priceCurrency: string | null;
            readonly shippingOrigin: string | null;
            readonly slug: string;
          } | null;
          readonly artworkOrEditionSet: {
            readonly __typename: "Artwork";
            readonly __isNode: "Artwork";
            readonly displayPriceRange: boolean | null;
            readonly id: string;
            readonly price: string | null;
          } | {
            readonly __typename: "EditionSet";
            readonly __isNode: "EditionSet";
            readonly displayPriceRange: boolean | null;
            readonly id: string;
            readonly price: string | null;
          } | {
            readonly __typename: string;
            readonly __isNode: string;
            readonly id: string;
          } | null;
          readonly artworkVersion: {
            readonly artistNames: string | null;
            readonly date: string | null;
            readonly id: string;
            readonly image: {
              readonly resized_ArtworkSummaryItem: {
                readonly url: string;
              } | null;
            } | null;
            readonly title: string | null;
          } | null;
          readonly id: string;
          readonly selectedShippingQuote: {
            readonly id: string;
            readonly typeName: string;
          } | null;
          readonly shippingQuoteOptions: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly id: string;
                readonly isSelected: boolean;
              } | null;
            } | null> | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
    readonly mode: CommerceOrderModeEnum | null;
    readonly paymentMethodDetails: {
      readonly __typename: "BankAccount";
      readonly id: string;
    } | {
      readonly __typename: "CreditCard";
      readonly id: string;
    } | {
      readonly __typename: "WireTransfer";
      readonly isManualPayment: boolean;
    } | {
      readonly __typename: string;
    } | null;
    readonly requestedFulfillment: {
      readonly __typename: string;
    } | null;
    readonly sellerDetails: {
      readonly __typename: "Partner";
      readonly __isNode: "Partner";
      readonly id: string;
      readonly name: string | null;
    } | {
      readonly __typename: string;
      readonly __isNode: string;
      readonly id: string;
    } | null;
    readonly shippingTotal: string | null;
    readonly shippingTotalCents: number | null;
    readonly source: CommerceOrderSourceEnum;
    readonly state: CommerceOrderStateEnum;
    readonly taxTotal: string | null;
    readonly taxTotalCents: number | null;
    readonly totalListPriceCents: number;
  } | null;
};
export type OfferTestQuery = {
  rawResponse: OfferTestQuery$rawResponse;
  response: OfferTestQuery$data;
  variables: OfferTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "unused"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "major",
    "storageKey": null
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayPriceRange",
  "storageKey": null
},
v7 = [
  (v5/*: any*/)
],
v8 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v9 = [
  {
    "kind": "Literal",
    "name": "precision",
    "value": 2
  }
],
v10 = {
  "alias": null,
  "args": (v9/*: any*/),
  "kind": "ScalarField",
  "name": "shippingTotal",
  "storageKey": "shippingTotal(precision:2)"
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shippingTotalCents",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": (v9/*: any*/),
  "kind": "ScalarField",
  "name": "taxTotal",
  "storageKey": "taxTotal(precision:2)"
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "taxTotalCents",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": (v9/*: any*/),
  "kind": "ScalarField",
  "name": "buyerTotal",
  "storageKey": "buyerTotal(precision:2)"
},
v15 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": (v9/*: any*/),
    "kind": "ScalarField",
    "name": "amount",
    "storageKey": "amount(precision:2)"
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "amountCents",
    "storageKey": null
  },
  (v10/*: any*/),
  (v11/*: any*/),
  (v12/*: any*/),
  (v13/*: any*/),
  (v14/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "buyerTotalCents",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "fromParticipant",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "note",
    "storageKey": null
  },
  (v5/*: any*/)
],
v16 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v18 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v19 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceOffer"
},
v21 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v22 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v23 = {
  "enumValues": [
    "BUYER",
    "SELLER"
  ],
  "nullable": true,
  "plural": false,
  "type": "CommerceOrderParticipantEnum"
},
v24 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v25 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Float"
},
v26 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Money"
},
v27 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceShippingQuote"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OfferTestQuery",
    "selections": [
      {
        "alias": "order",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Offer_order"
          }
        ],
        "storageKey": "commerceOrder(id:\"unused\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OfferTestQuery",
    "selections": [
      {
        "alias": "order",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isCommerceOrder"
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalListPriceCents",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currencyCode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CommerceLineItemConnection",
            "kind": "LinkedField",
            "name": "lineItems",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CommerceLineItemEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceLineItem",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
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
                            "name": "slug",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isPriceRange",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "listPrice",
                            "plural": false,
                            "selections": [
                              (v1/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v4/*: any*/),
                                "type": "Money",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Money",
                                    "kind": "LinkedField",
                                    "name": "maxPrice",
                                    "plural": false,
                                    "selections": (v4/*: any*/),
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Money",
                                    "kind": "LinkedField",
                                    "name": "minPrice",
                                    "plural": false,
                                    "selections": (v4/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "type": "PriceRange",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "EditionSet",
                            "kind": "LinkedField",
                            "name": "editionSets",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "priceCurrency",
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "shippingOrigin",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "artworkOrEditionSet",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/),
                              (v6/*: any*/)
                            ],
                            "type": "Artwork",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/),
                              (v6/*: any*/),
                              (v5/*: any*/)
                            ],
                            "type": "EditionSet",
                            "abstractKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtworkVersion",
                        "kind": "LinkedField",
                        "name": "artworkVersion",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artistNames",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              {
                                "alias": "resized_ArtworkSummaryItem",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "width",
                                    "value": 55
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
                                    "name": "url",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "resized(width:55)"
                              }
                            ],
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommerceShippingQuote",
                        "kind": "LinkedField",
                        "name": "selectedShippingQuote",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "typeName",
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommerceShippingQuoteConnection",
                        "kind": "LinkedField",
                        "name": "shippingQuoteOptions",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommerceShippingQuoteEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommerceShippingQuote",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isSelected",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/)
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isInquiryOrder",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CommerceOffer",
                "kind": "LinkedField",
                "name": "lastOffer",
                "plural": false,
                "selections": (v15/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CommerceOffer",
                "kind": "LinkedField",
                "name": "myLastOffer",
                "plural": false,
                "selections": (v15/*: any*/),
                "storageKey": null
              }
            ],
            "type": "CommerceOfferOrder",
            "abstractKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "sellerDetails",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "type": "Partner",
                "abstractKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "source",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "requestedFulfillment",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "alias": null,
            "args": (v9/*: any*/),
            "kind": "ScalarField",
            "name": "itemsTotal",
            "storageKey": "itemsTotal(precision:2)"
          },
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "paymentMethodDetails",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v7/*: any*/),
                "type": "CreditCard",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v7/*: any*/),
                "type": "BankAccount",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isManualPayment",
                    "storageKey": null
                  }
                ],
                "type": "WireTransfer",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": "commerceOrder(id:\"unused\")"
      }
    ]
  },
  "params": {
    "cacheID": "d70cade82d262252f794fff293a29376",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "order": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrder"
        },
        "order.__isCommerceOrder": (v16/*: any*/),
        "order.__typename": (v16/*: any*/),
        "order.buyerTotal": (v17/*: any*/),
        "order.code": (v16/*: any*/),
        "order.currencyCode": (v16/*: any*/),
        "order.id": (v18/*: any*/),
        "order.internalID": (v18/*: any*/),
        "order.isInquiryOrder": (v19/*: any*/),
        "order.itemsTotal": (v17/*: any*/),
        "order.lastOffer": (v20/*: any*/),
        "order.lastOffer.amount": (v17/*: any*/),
        "order.lastOffer.amountCents": (v21/*: any*/),
        "order.lastOffer.buyerTotal": (v17/*: any*/),
        "order.lastOffer.buyerTotalCents": (v22/*: any*/),
        "order.lastOffer.fromParticipant": (v23/*: any*/),
        "order.lastOffer.id": (v18/*: any*/),
        "order.lastOffer.internalID": (v18/*: any*/),
        "order.lastOffer.note": (v17/*: any*/),
        "order.lastOffer.shippingTotal": (v17/*: any*/),
        "order.lastOffer.shippingTotalCents": (v22/*: any*/),
        "order.lastOffer.taxTotal": (v17/*: any*/),
        "order.lastOffer.taxTotalCents": (v22/*: any*/),
        "order.lineItems": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceLineItemConnection"
        },
        "order.lineItems.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceLineItemEdge"
        },
        "order.lineItems.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceLineItem"
        },
        "order.lineItems.edges.node.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "order.lineItems.edges.node.artwork.editionSets": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "EditionSet"
        },
        "order.lineItems.edges.node.artwork.editionSets.id": (v18/*: any*/),
        "order.lineItems.edges.node.artwork.editionSets.internalID": (v18/*: any*/),
        "order.lineItems.edges.node.artwork.id": (v18/*: any*/),
        "order.lineItems.edges.node.artwork.isPriceRange": (v24/*: any*/),
        "order.lineItems.edges.node.artwork.listPrice": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ListPrice"
        },
        "order.lineItems.edges.node.artwork.listPrice.__typename": (v16/*: any*/),
        "order.lineItems.edges.node.artwork.listPrice.major": (v25/*: any*/),
        "order.lineItems.edges.node.artwork.listPrice.maxPrice": (v26/*: any*/),
        "order.lineItems.edges.node.artwork.listPrice.maxPrice.major": (v25/*: any*/),
        "order.lineItems.edges.node.artwork.listPrice.minPrice": (v26/*: any*/),
        "order.lineItems.edges.node.artwork.listPrice.minPrice.major": (v25/*: any*/),
        "order.lineItems.edges.node.artwork.price": (v17/*: any*/),
        "order.lineItems.edges.node.artwork.priceCurrency": (v17/*: any*/),
        "order.lineItems.edges.node.artwork.shippingOrigin": (v17/*: any*/),
        "order.lineItems.edges.node.artwork.slug": (v18/*: any*/),
        "order.lineItems.edges.node.artworkOrEditionSet": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkOrEditionSetType"
        },
        "order.lineItems.edges.node.artworkOrEditionSet.__isNode": (v16/*: any*/),
        "order.lineItems.edges.node.artworkOrEditionSet.__typename": (v16/*: any*/),
        "order.lineItems.edges.node.artworkOrEditionSet.displayPriceRange": (v24/*: any*/),
        "order.lineItems.edges.node.artworkOrEditionSet.id": (v18/*: any*/),
        "order.lineItems.edges.node.artworkOrEditionSet.price": (v17/*: any*/),
        "order.lineItems.edges.node.artworkVersion": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkVersion"
        },
        "order.lineItems.edges.node.artworkVersion.artistNames": (v17/*: any*/),
        "order.lineItems.edges.node.artworkVersion.date": (v17/*: any*/),
        "order.lineItems.edges.node.artworkVersion.id": (v18/*: any*/),
        "order.lineItems.edges.node.artworkVersion.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "order.lineItems.edges.node.artworkVersion.image.resized_ArtworkSummaryItem": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "order.lineItems.edges.node.artworkVersion.image.resized_ArtworkSummaryItem.url": (v16/*: any*/),
        "order.lineItems.edges.node.artworkVersion.title": (v17/*: any*/),
        "order.lineItems.edges.node.id": (v18/*: any*/),
        "order.lineItems.edges.node.selectedShippingQuote": (v27/*: any*/),
        "order.lineItems.edges.node.selectedShippingQuote.id": (v18/*: any*/),
        "order.lineItems.edges.node.selectedShippingQuote.typeName": (v16/*: any*/),
        "order.lineItems.edges.node.shippingQuoteOptions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceShippingQuoteConnection"
        },
        "order.lineItems.edges.node.shippingQuoteOptions.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceShippingQuoteEdge"
        },
        "order.lineItems.edges.node.shippingQuoteOptions.edges.node": (v27/*: any*/),
        "order.lineItems.edges.node.shippingQuoteOptions.edges.node.id": (v18/*: any*/),
        "order.lineItems.edges.node.shippingQuoteOptions.edges.node.isSelected": (v19/*: any*/),
        "order.mode": {
          "enumValues": [
            "BUY",
            "OFFER"
          ],
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderModeEnum"
        },
        "order.myLastOffer": (v20/*: any*/),
        "order.myLastOffer.amount": (v17/*: any*/),
        "order.myLastOffer.amountCents": (v21/*: any*/),
        "order.myLastOffer.buyerTotal": (v17/*: any*/),
        "order.myLastOffer.buyerTotalCents": (v22/*: any*/),
        "order.myLastOffer.fromParticipant": (v23/*: any*/),
        "order.myLastOffer.id": (v18/*: any*/),
        "order.myLastOffer.internalID": (v18/*: any*/),
        "order.myLastOffer.note": (v17/*: any*/),
        "order.myLastOffer.shippingTotal": (v17/*: any*/),
        "order.myLastOffer.shippingTotalCents": (v22/*: any*/),
        "order.myLastOffer.taxTotal": (v17/*: any*/),
        "order.myLastOffer.taxTotalCents": (v22/*: any*/),
        "order.paymentMethodDetails": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PaymentMethodUnion"
        },
        "order.paymentMethodDetails.__typename": (v16/*: any*/),
        "order.paymentMethodDetails.id": (v18/*: any*/),
        "order.paymentMethodDetails.isManualPayment": (v19/*: any*/),
        "order.requestedFulfillment": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceRequestedFulfillmentUnion"
        },
        "order.requestedFulfillment.__typename": (v16/*: any*/),
        "order.sellerDetails": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "OrderParty"
        },
        "order.sellerDetails.__isNode": (v16/*: any*/),
        "order.sellerDetails.__typename": (v16/*: any*/),
        "order.sellerDetails.id": (v18/*: any*/),
        "order.sellerDetails.name": (v17/*: any*/),
        "order.shippingTotal": (v17/*: any*/),
        "order.shippingTotalCents": (v22/*: any*/),
        "order.source": {
          "enumValues": [
            "artwork_page",
            "inquiry",
            "private_sale"
          ],
          "nullable": false,
          "plural": false,
          "type": "CommerceOrderSourceEnum"
        },
        "order.state": {
          "enumValues": [
            "ABANDONED",
            "APPROVED",
            "CANCELED",
            "FULFILLED",
            "IN_REVIEW",
            "PENDING",
            "PROCESSING_APPROVAL",
            "REFUNDED",
            "SUBMITTED"
          ],
          "nullable": false,
          "plural": false,
          "type": "CommerceOrderStateEnum"
        },
        "order.taxTotal": (v17/*: any*/),
        "order.taxTotalCents": (v22/*: any*/),
        "order.totalListPriceCents": (v21/*: any*/)
      }
    },
    "name": "OfferTestQuery",
    "operationKind": "query",
    "text": "query OfferTestQuery {\n  order: commerceOrder(id: \"unused\") {\n    __typename\n    ...Offer_order\n    id\n  }\n}\n\nfragment ArtworkSummaryItem_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  sellerDetails {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  currencyCode\n  mode\n  source\n  lineItems {\n    edges {\n      node {\n        artworkOrEditionSet {\n          __typename\n          ... on Artwork {\n            price\n          }\n          ... on EditionSet {\n            price\n            id\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        artwork {\n          shippingOrigin\n          id\n        }\n        artworkVersion {\n          date\n          artistNames\n          title\n          image {\n            resized_ArtworkSummaryItem: resized(width: 55) {\n              url\n            }\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Offer_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  internalID\n  mode\n  state\n  totalListPriceCents\n  currencyCode\n  lineItems {\n    edges {\n      node {\n        artwork {\n          slug\n          price\n          isPriceRange\n          listPrice {\n            __typename\n            ... on Money {\n              major\n            }\n            ... on PriceRange {\n              maxPrice {\n                major\n              }\n              minPrice {\n                major\n              }\n            }\n          }\n          editionSets {\n            internalID\n            id\n          }\n          ...PriceOptions_artwork\n          id\n        }\n        artworkOrEditionSet {\n          __typename\n          ... on Artwork {\n            price\n            displayPriceRange\n          }\n          ... on EditionSet {\n            price\n            displayPriceRange\n            id\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n  ... on CommerceOfferOrder {\n    isInquiryOrder\n  }\n  ...ArtworkSummaryItem_order\n  ...TransactionDetailsSummaryItem_order\n  ...PriceOptions_order\n  ...OrderStepper_order\n}\n\nfragment OrderStepper_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  mode\n  requestedFulfillment {\n    __typename\n  }\n  paymentMethodDetails {\n    __typename\n    ... on CreditCard {\n      id\n    }\n    ... on BankAccount {\n      id\n    }\n    ... on WireTransfer {\n      isManualPayment\n    }\n  }\n  lineItems {\n    edges {\n      node {\n        artwork {\n          slug\n          id\n        }\n        shippingQuoteOptions {\n          edges {\n            node {\n              isSelected\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment PriceOptions_artwork on Artwork {\n  priceCurrency\n  isPriceRange\n  listPrice {\n    __typename\n    ... on Money {\n      major\n    }\n    ... on PriceRange {\n      maxPrice {\n        major\n      }\n      minPrice {\n        major\n      }\n    }\n  }\n}\n\nfragment PriceOptions_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  internalID\n}\n\nfragment TransactionDetailsSummaryItem_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  __typename\n  requestedFulfillment {\n    __typename\n  }\n  code\n  lineItems {\n    edges {\n      node {\n        artworkOrEditionSet {\n          __typename\n          ... on Artwork {\n            price\n          }\n          ... on EditionSet {\n            price\n            id\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        selectedShippingQuote {\n          typeName\n          id\n        }\n        id\n      }\n    }\n  }\n  mode\n  shippingTotal(precision: 2)\n  shippingTotalCents\n  taxTotal(precision: 2)\n  taxTotalCents\n  itemsTotal(precision: 2)\n  buyerTotal(precision: 2)\n  currencyCode\n  ... on CommerceOfferOrder {\n    lastOffer {\n      internalID\n      amount(precision: 2)\n      amountCents\n      shippingTotal(precision: 2)\n      shippingTotalCents\n      taxTotal(precision: 2)\n      taxTotalCents\n      buyerTotal(precision: 2)\n      buyerTotalCents\n      fromParticipant\n      note\n      id\n    }\n    myLastOffer {\n      internalID\n      amount(precision: 2)\n      amountCents\n      shippingTotal(precision: 2)\n      shippingTotalCents\n      taxTotal(precision: 2)\n      taxTotalCents\n      buyerTotal(precision: 2)\n      buyerTotalCents\n      fromParticipant\n      note\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c479acb11fa907daa9414c3d9d87dc31";

export default node;
