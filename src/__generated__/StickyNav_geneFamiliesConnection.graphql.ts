/**
 * @generated SignedSource<<5c2b4bee36efd285eaaae5d9c4eda7a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StickyNav_geneFamiliesConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly internalID: string;
      readonly slug: string;
      readonly name: string;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "StickyNav_geneFamiliesConnection";
};
export type StickyNav_geneFamiliesConnection$key = {
  readonly " $data"?: StickyNav_geneFamiliesConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"StickyNav_geneFamiliesConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StickyNav_geneFamiliesConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GeneFamilyEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "GeneFamily",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GeneFamilyConnection",
  "abstractKey": null
};

(node as any).hash = "483b43082e9eb2c97d57bed30a35d4d9";

export default node;
