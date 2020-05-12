import { trackAuthenticationEvents } from "../global_client_setup"
import Cookies from "cookies-js"

jest.mock("sharify", () => {
  return {
    data: {},
  }
})
const sd = require("sharify").data

describe("globalClientSetup", () => {
  describe("#trackAuthenticationEvents", () => {
    beforeEach(() => {
      sd.CURRENT_USER = { id: "123", email: "user@email.com" }
      window.analytics = {
        track: jest.fn(),
        identify: jest.fn(),
      } as any
    })

    it("fires createdAccount analytics event if analytics-signup cookie is present", () => {
      Cookies.set(
        "analytics-signup",
        '{"action":"createdAccount","auth_redirect":"/artist/andy-warhol","context_module":"popUpModal","intent":"viewArtist","onboarding":true,"service":"facebook","trigger":"timed","trigger_seconds":2,"type":"signup"}',
        { expires: 86400 }
      )
      trackAuthenticationEvents()
      expect(window.analytics.track).toBeCalledWith("createdAccount", {
        auth_redirect: "/artist/andy-warhol",
        context_module: "popUpModal",
        intent: "viewArtist",
        onboarding: true,
        service: "facebook",
        trigger: "timed",
        trigger_seconds: 2,
        type: "signup",
        userId: "123",
      })
      expect(window.analytics.identify).toBeCalledWith(
        "123",
        "user@email.com",
        {
          integrations: { All: false, Marketo: true },
        }
      )
      expect(Cookies.get("analytics-signup")).toBeUndefined()
    })

    it("fires successfullyLoggedIn analytics event if analytics-login cookie is present", () => {
      Cookies.set(
        "analytics-login",
        '{"action":"successfullyLoggedIn","auth_redirect":"/artist/andy-warhol","context_module":"popUpModal","intent":"viewArtist","service":"apple","trigger":"timed","trigger_seconds":2,"type":"login"}',
        { expires: 86400 }
      )
      trackAuthenticationEvents()
      expect(window.analytics.track).toBeCalledWith("successfullyLoggedIn", {
        auth_redirect: "/artist/andy-warhol",
        context_module: "popUpModal",
        intent: "viewArtist",
        service: "apple",
        trigger: "timed",
        trigger_seconds: 2,
        type: "login",
        userId: "123",
      })
      expect(window.analytics.identify).toBeCalledWith(
        "123",
        "user@email.com",
        {
          integrations: { All: false, Marketo: true },
        }
      )
      expect(Cookies.get("analytics-login")).toBeUndefined()
    })
  })
})
