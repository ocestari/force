/**
 * @generated SignedSource<<c128e8e598b1bbd95609bf7bf12ca051>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaveArtworkToSaveListsButton_artwork$data = {
  readonly id: string;
  readonly internalID: string;
  readonly is_saved: boolean | null;
  readonly slug: string;
  readonly " $fragmentType": "SaveArtworkToSaveListsButton_artwork";
};
export type SaveArtworkToSaveListsButton_artwork$key = {
  readonly " $data"?: SaveArtworkToSaveListsButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaveArtworkToSaveListsButton_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaveArtworkToSaveListsButton_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "5209b92875fd9451399275bbc75de408";

export default node;
