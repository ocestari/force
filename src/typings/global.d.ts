interface Window {
  analytics?: {
    page: (object, object) => void
    identify: (userId: string, email: string, object) => void
    track: (action: string, object) => void
  }
  __BOOTSTRAP__?: any
}
