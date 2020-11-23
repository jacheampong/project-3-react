import React, { Component } from 'react'
import Track from './Track'

class Tracks extends Component {
  render() {
    const allTracks = this.props.tracks.map((track, index) => {
      // console.log('track id here', track.track.track_id)
      return <Track 
                track={track} 
                key={track.track.track_id} 
                id={index+1} 
                searchType={this.props.searchType} 
              />
    })

    const heading = (this.props.searchType === "topten") 
    ? <h3>Top 10 List</h3>
    : <h3>Track List</h3>

    return (
      <div className="container">
       { heading }
        {allTracks}
      </div>
    )
  }
}

export default Tracks
