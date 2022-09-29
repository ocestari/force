/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FollowProfileButtonQueryVariables = {
    id: string;
};
export type FollowProfileButtonQueryResponse = {
    readonly profile: {
        readonly " $fragmentRefs": FragmentRefs<"FollowProfileButton_profile">;
    } | null;
};
export type FollowProfileButtonQuery = {
    readonly response: FollowProfileButtonQueryResponse;
    readonly variables: FollowProfileButtonQueryVariables;
};



/*
query FollowProfileButtonQuery(
  $id: String!
) {
  profile(id: $id) {
    ...FollowProfileButton_profile
    id
  }
}

fragment FollowProfileButton_profile on Profile {
  id
  slug
  name
  internalID
  isFollowed
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FollowProfileButtonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Profile",
        "kind": "LinkedField",
        "name": "profile",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FollowProfileButton_profile"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FollowProfileButtonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Profile",
        "kind": "LinkedField",
        "name": "profile",
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
          },
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
            "name": "isFollowed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7971aed591abcfab3190859f6b095376",
    "id": null,
    "metadata": {},
    "name": "FollowProfileButtonQuery",
    "operationKind": "query",
    "text": "query FollowProfileButtonQuery(\n  $id: String!\n) {\n  profile(id: $id) {\n    ...FollowProfileButton_profile\n    id\n  }\n}\n\nfragment FollowProfileButton_profile on Profile {\n  id\n  slug\n  name\n  internalID\n  isFollowed\n}\n"
  }
};
})();
(node as any).hash = '3c0215aa6cff09e5f359eb12f41a9eda';
export default node;
