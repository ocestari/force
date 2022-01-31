/**
 * @generated SignedSource<<596f30f2914db6e664027256cfe49f95>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowsRail_partner$data = {
  readonly slug: string;
  readonly displayFullPartnerPage: boolean | null;
  readonly showsConnection: {
    readonly totalCount: number | null;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ShowCard_show">;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "ShowsRail_partner";
};
export type ShowsRail_partner$key = {
  readonly " $data"?: ShowsRail_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowsRail_partner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowsRail_partner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayFullPartnerPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 20
        },
        {
          "kind": "Literal",
          "name": "isDisplayable",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "status",
          "value": "ALL"
        }
      ],
      "concreteType": "ShowConnection",
      "kind": "LinkedField",
      "name": "showsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ShowEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Show",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ShowCard_show"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "showsConnection(first:20,isDisplayable:true,status:\"ALL\")"
    }
  ],
  "type": "Partner",
  "abstractKey": null
};

(node as any).hash = "d6e77342a610708d73c1b06cb0b3bed2";

export default node;
