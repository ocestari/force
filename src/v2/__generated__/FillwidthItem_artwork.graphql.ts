/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FillwidthItem_artwork = {
    readonly image: {
        readonly url: string | null;
        readonly aspect_ratio: number;
    } | null;
    readonly imageTitle: string | null;
    readonly title: string | null;
    readonly href: string | null;
    readonly " $fragmentRefs": FragmentRefs<"Metadata_artwork" | "Save_artwork" | "Badge_artwork">;
    readonly " $refType": "FillwidthItem_artwork";
};
export type FillwidthItem_artwork$data = FillwidthItem_artwork;
export type FillwidthItem_artwork$key = {
    readonly " $data"?: FillwidthItem_artwork$data;
    readonly " $fragmentRefs": FragmentRefs<"FillwidthItem_artwork">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "FillwidthItem_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "large"
            }
          ],
          "storageKey": "url(version:\"large\")"
        },
        {
          "kind": "ScalarField",
          "alias": "aspect_ratio",
          "name": "aspectRatio",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "imageTitle",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Metadata_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Save_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Badge_artwork",
      "args": null
    }
  ]
};
(node as any).hash = '7c690a2390e9f5a0ad834b2cba4ed7a6';
export default node;
