module.exports = """
  fragment artist_artworks on Artwork {
    artist {
      name
      artworks(size: 10, sort: merchandisability_desc) {
        ... artwork_brick
      }
    }
  }

  #{require '../../../../components/artwork_brick/query.coffee'}
"""
