/**
 * @generated SignedSource<<45efa213366092b0bcc66ec630755260>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnersRail_partnerCategory$data = {
  readonly name: string | null;
  readonly primary: ReadonlyArray<{
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"PartnerCell_partner">;
  } | null> | null;
  readonly secondary: ReadonlyArray<{
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"PartnerCell_partner">;
  } | null> | null;
  readonly " $fragmentType": "PartnersRail_partnerCategory";
};
export type PartnersRail_partnerCategory$key = {
  readonly " $data"?: PartnersRail_partnerCategory$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnersRail_partnerCategory">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "defaultProfilePublic",
  "value": true
},
v1 = {
  "kind": "Literal",
  "name": "eligibleForListing",
  "value": true
},
v2 = {
  "kind": "Variable",
  "name": "partnerCategories",
  "variableName": "category"
},
v3 = {
  "kind": "Literal",
  "name": "sort",
  "value": "RANDOM_SCORE_DESC"
},
v4 = {
  "kind": "Variable",
  "name": "type",
  "variableName": "type"
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "internalID",
    "storageKey": null
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "PartnerCell_partner"
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "category"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "type"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnersRail_partnerCategory",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": "primary",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "Literal",
          "name": "eligibleForPrimaryBucket",
          "value": true
        },
        (v2/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/)
      ],
      "concreteType": "Partner",
      "kind": "LinkedField",
      "name": "partners",
      "plural": true,
      "selections": (v5/*: any*/),
      "storageKey": null
    },
    {
      "alias": "secondary",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "Literal",
          "name": "eligibleForSecondaryBucket",
          "value": true
        },
        (v2/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/)
      ],
      "concreteType": "Partner",
      "kind": "LinkedField",
      "name": "partners",
      "plural": true,
      "selections": (v5/*: any*/),
      "storageKey": null
    }
  ],
  "type": "PartnerCategory",
  "abstractKey": null
};
})();

(node as any).hash = "cc6b6a031766931890033cb1c816dc44";

export default node;
