
// api.js

// set api key 
const MUSIX_API_KEY=process.env.REACT_APP_MUSIX_API_KEY

const Musixmatch = require('musixmatch-node')
const mxm = new Musixmatch(`${MUSIX_API_KEY}`)

const getMusixApiCall = (searchText, searchType) => {
  if (searchType === "artist") {
    console.log(`Searching for ${searchType} by ${searchText}`);
    return searchArtistsByName(searchText);
  }
  if (searchType === "track") {
    console.log(`Searching for ${searchType} by ${searchText}`);
    return searchTracksByName(searchText);
  }
  if (searchType === "lyric") {
    console.log(`In API.JS, Searching for ${searchType} by ${searchText}`);
    return searchLyricsByName(searchText);
  }

};

/**
 * search for artist by name
 * @param {*} searchText 
 */
const searchArtistsByName = async (searchText) => {
  const artists = await mxm.searchArtist({
      q_artist:`${searchText}`,
  })
  return artists
};

/**
 * search tracks/song by the song title
 * @param {*} searchText 
 */
const searchTracksByName = async (searchText) => {
    const tracks = await mxm.searchTrack({
        q_track:`${searchText}`,
    })

    return tracks
};

/**
 * search lyrics by the song line
 * @param {*} searchText 
 */
const searchLyricsByName = async (searchText) => {
  const lyrics = await mxm.getLyricsMatcher({
    q_track:`${searchText}`,
  })
  console.log("1234:: ", lyrics)
  return lyrics
};

export { getMusixApiCall };
