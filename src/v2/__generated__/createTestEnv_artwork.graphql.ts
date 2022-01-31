/**
 * @generated SignedSource<<93385225e2f96ad267c9f1a833e4f77f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createTestEnv_artwork$data = {
  readonly title: string | null;
  readonly artist: {
    readonly name: string | null;
  } | null;
  readonly " $fragmentType": "createTestEnv_artwork";
};
export type createTestEnv_artwork$key = {
  readonly " $data"?: createTestEnv_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"createTestEnv_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "createTestEnv_artwork",
  "selections": [
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
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
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
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "77748b446a7cb5332e22b3fc524700a1";

export default node;
