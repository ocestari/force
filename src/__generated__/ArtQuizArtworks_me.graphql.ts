/**
 * @generated SignedSource<<47fa3ac07d6f2b54ce17930edf80dea8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizArtworks_me$data = {
  readonly quiz: {
    readonly quizArtworkConnection: {
      readonly edges: ReadonlyArray<{
        readonly interactedAt: string | null;
        readonly node: {
          readonly id: string;
          readonly image: {
            readonly resized: {
              readonly height: number | null;
              readonly src: string;
              readonly srcSet: string;
              readonly width: number | null;
            } | null;
          } | null;
          readonly internalID: string;
          readonly isDisliked: boolean;
          readonly isSaved: boolean | null;
          readonly slug: string;
          readonly title: string | null;
        } | null;
        readonly position: number;
      } | null> | null;
    } | null;
  };
  readonly " $fragmentType": "ArtQuizArtworks_me";
};
export type ArtQuizArtworks_me$key = {
  readonly " $data"?: ArtQuizArtworks_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtQuizArtworks_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtQuizArtworks_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Quiz",
      "kind": "LinkedField",
      "name": "quiz",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 16
            }
          ],
          "concreteType": "QuizArtworkConnection",
          "kind": "LinkedField",
          "name": "quizArtworkConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "QuizArtworkEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "interactedAt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "position",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Artwork",
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
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "internalID",
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
                          "alias": null,
                          "args": [
                            {
                              "kind": "Literal",
                              "name": "height",
                              "value": 900
                            },
                            {
                              "kind": "Literal",
                              "name": "width",
                              "value": 900
                            }
                          ],
                          "concreteType": "ResizedImageUrl",
                          "kind": "LinkedField",
                          "name": "resized",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "src",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "srcSet",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "width",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "height",
                              "storageKey": null
                            }
                          ],
                          "storageKey": "resized(height:900,width:900)"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "isDisliked",
                      "storageKey": null
                    },
                    {
                      "alias": null,
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
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "title",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "quizArtworkConnection(first:16)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "e5b04eff2e8a1ccc0e14b754c8f098df";

export default node;
