/**
 * @generated SignedSource<<6b8e9dfebd8be787788c1cde1c2fbcf4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionArtworksFilter_collection$data = {
  readonly slug: string;
  readonly query: {
    readonly artistIDs: ReadonlyArray<string> | null;
  };
  readonly filtered_artworks: {
    readonly id: string;
    readonly counts: {
      readonly total: any | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkFilterArtworkGrid_filtered_artworks">;
  } | null;
  readonly " $fragmentType": "CollectionArtworksFilter_collection";
};
export type CollectionArtworksFilter_collection$key = {
  readonly " $data"?: CollectionArtworksFilter_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionArtworksFilter_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "input"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionArtworksFilter_collection",
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
      "concreteType": "MarketingCollectionQuery",
      "kind": "LinkedField",
      "name": "query",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artistIDs",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "filtered_artworks",
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "input"
        }
      ],
      "concreteType": "FilterArtworksConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
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
          "alias": null,
          "args": null,
          "concreteType": "FilterArtworksCounts",
          "kind": "LinkedField",
          "name": "counts",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "format",
                  "value": "0,0"
                }
              ],
              "kind": "ScalarField",
              "name": "total",
              "storageKey": "total(format:\"0,0\")"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtworkFilterArtworkGrid_filtered_artworks"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "901c750ea2861fa615ef4840b88ca783";

export default node;
