import { match } from "path-to-regexp"

const USER_REQUIRED_ROUTES = [
  "/notifications",
  "/orders(.*)",
  "/my-collection/artworks(.*)",
  "/settings/alerts",
  "/settings/payments",
  "/settings/purchases(.*)",
  "/settings/shipping",
  "/user/conversations(.*)",
  "/collector-profile/saves2(.*)",
]

const isRequestRequiringUser = req => {
  return USER_REQUIRED_ROUTES.map(route => match(route)).some(matcher =>
    matcher(req)
  )
}

export const userRequiredMiddleware = (req, res, next) => {
  if (isRequestRequiringUser(req.path)) {
    if (!res.locals.sd.CURRENT_USER) {
      return res.redirect(
        `/login?redirectTo=${encodeURIComponent(req.originalUrl)}`
      )
    }
  }

  next()
}
