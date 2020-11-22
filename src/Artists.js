
// Artists.js

import React, { Component } from "react";
import Artist from './Artist'

class Artists extends Component {
    render() {
        // console.log(`ART NAME=${this.props.artists[2].artist.artist_name}`)
        const allArtists = this.props.artists.map((anArtist, index) => {
            return <Artist artist={anArtist} 
                           key={anArtist.artist.artist_id} 
                   />;
        })    
        return(
            <div className="container">
                <h3>Artists</h3>
                {allArtists}
            </div>
        )
    }
}

export default Artists

