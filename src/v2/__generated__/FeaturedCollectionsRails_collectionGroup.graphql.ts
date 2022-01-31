/**
 * @generated SignedSource<<0d2f0073fdf171b8a25ebd5bfbfa5e20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type MarketingGroupTypes = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FeaturedCollectionsRails_collectionGroup$data = {
  readonly groupType: MarketingGroupTypes;
  readonly name: string;
  readonly members: ReadonlyArray<{
    readonly id: string;
    readonly slug: string;
    readonly title: string;
    readonly description: string | null;
    readonly priceGuidance: number | null;
    readonly thumbnail: string | null;
  }>;
  readonly " $fragmentType": "FeaturedCollectionsRails_collectionGroup";
};
export type FeaturedCollectionsRails_collectionGroup$key = {
  readonly " $data"?: FeaturedCollectionsRails_collectionGroup$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsRails_collectionGroup">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedCollectionsRails_collectionGroup",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "groupType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MarketingCollection",
      "kind": "LinkedField",
      "name": "members",
      "plural": true,
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
          "name": "slug",
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
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "priceGuidance",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "thumbnail",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MarketingCollectionGroup",
  "abstractKey": null
};

(node as any).hash = "b2af7ee18d4fa1d6393ffea8d8050e51";

export default node;
