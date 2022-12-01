import loadable from "@loadable/component"
import { AppRouteConfig } from "System/Router/Route"

const ArtQuizApp = loadable(() => import("./ArtQuizApp"), {
  resolveComponent: component => component.ArtQuizApp,
})

const ArtQuizResults = loadable(() => import("./ArtQuizResults"), {
  resolveComponent: component => component.ArtQuizResults,
})

// TODO: Add query to check for quiz template
export const artQuizRoutes: AppRouteConfig[] = [
  {
    path: "/art-quiz",
    onServerSideRender: ({ req, res }) => {
      if (!res.locals.sd.FEATURE_FLAGS["art-quiz"].flagEnabled) {
        res.redirect("/")
      }
    },
    onClientSideRender: () => {
      ArtQuizApp.preload()
      ArtQuizResults.preload()
    },
    children: [
      {
        path: "/",
        hideFooter: true,
        getComponent: () => ArtQuizApp,
      },
      {
        path: "results",
        hideFooter: true,
        getComponent: () => ArtQuizResults,
        onClientSideRender: () => {
          ArtQuizResults.preload()
        },
      },
    ],
  },
]
