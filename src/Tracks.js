import React, { Component } from 'react'
import Track from './Track'

class Tracks extends Component {
  render() {
    //console.log(`Track NAME=${this.props.tracks[0].track_name}`)
    const allTracks = this.props.tracks.map((track) => {
      return <Track track={track} key={track.track_id} />
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
