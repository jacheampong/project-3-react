import React, { Component } from 'react'
import Track from './Track'

class Tracks extends Component {
  render() {
    const allTracks = this.props.tracks.map((track) => {
      // console.log('track id here', track.track.track_id)
      return <Track track={track} key={track.track.track_id} />
    })

    return (
      <>
        <hr></hr>
        <h3>Track List</h3>
        {allTracks}
      </>
    )
  }
}

export default Tracks
