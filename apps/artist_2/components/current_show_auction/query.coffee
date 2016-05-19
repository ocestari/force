module.exports = """
  fragment current on Artist {
    auction: sales(size:2, live: true, is_auction: true){
      cover_image {
        cropped(width: 150, height: 104) {
          url
        }
      }
      href
      name
      start_at
      end_at
    }
    show: partner_shows(size:2, at_a_fair: false, status:"running", sort:end_at_asc, top_tier: true) {
      ... relatedShow
    }
  }
  #{require '../related_shows/fragment.coffee'}
"""