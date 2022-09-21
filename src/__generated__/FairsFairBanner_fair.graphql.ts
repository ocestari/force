/**
 * @generated SignedSource<<a4605c9272b2f5dd4378878d5a78b863>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairsFairBanner_fair$data = {
  readonly href: string | null;
  readonly name: string | null;
  readonly exhibitionPeriod: string | null;
  readonly bannerSize: string | null;
  readonly image: {
    readonly large: {
      readonly src: string;
      readonly srcSet: string;
      readonly width: number;
      readonly height: number;
    } | null;
    readonly small: {
      readonly src: string;
      readonly srcSet: string;
      readonly width: number;
      readonly height: number;
    } | null;
  } | null;
  readonly profile: {
    readonly icon: {
      readonly resized: {
        readonly width: number | null;
        readonly height: number | null;
        readonly src: string;
        readonly srcSet: string;
      } | null;
    } | null;
  } | null;
  readonly " $fragmentType": "FairsFairBanner_fair";
};
export type FairsFairBanner_fair$key = {
  readonly " $data"?: FairsFairBanner_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairsFairBanner_fair">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "version",
  "value": [
    "wide"
  ]
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "src",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "srcSet",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v5 = [
  (v1/*: any*/),
  (v2/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairsFairBanner_fair",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
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
      "kind": "ScalarField",
      "name": "exhibitionPeriod",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bannerSize",
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
          "alias": "large",
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 790
            },
            (v0/*: any*/),
            {
              "kind": "Literal",
              "name": "width",
              "value": 1840
            }
          ],
          "concreteType": "CroppedImageUrl",
          "kind": "LinkedField",
          "name": "cropped",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": "cropped(height:790,version:[\"wide\"],width:1840)"
        },
        {
          "alias": "small",
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 512
            },
            (v0/*: any*/),
            {
              "kind": "Literal",
              "name": "width",
              "value": 910
            }
          ],
          "concreteType": "CroppedImageUrl",
          "kind": "LinkedField",
          "name": "cropped",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": "cropped(height:512,version:[\"wide\"],width:910)"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "profile",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Image",
          "kind": "LinkedField",
          "name": "icon",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "height",
                  "value": 80
                },
                {
                  "kind": "Literal",
                  "name": "version",
                  "value": "square140"
                },
                {
                  "kind": "Literal",
                  "name": "width",
                  "value": 80
                }
              ],
              "concreteType": "ResizedImageUrl",
              "kind": "LinkedField",
              "name": "resized",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                (v4/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/)
              ],
              "storageKey": "resized(height:80,version:\"square140\",width:80)"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Fair",
  "abstractKey": null
};
})();

(node as any).hash = "8b6356d6ed39457f9f42fa416367490e";

export default node;
