import React, { Component } from 'react'
import Track from './Track'

class Tracks extends Component {
  render() {
    //console.log(`Track NAME=${this.props.tracks[0].track_name}`)
    const allTracks = this.props.tracks.map((tracks) => {
      return tracks.track_name
      //<Tracks tracks={tracks} key={tracks.track_name} />
    })
    return (
      <>
        <hr></hr>
        <h4>Track List</h4>

        <li>{allTracks[0]}</li>
        <li>{allTracks[1]}</li>
        <li>{allTracks[2]}</li>
      </>
    )
  }
}

export default Tracks
