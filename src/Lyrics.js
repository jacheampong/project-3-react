
// Lyrics.js

import React, { Component } from "react";

export default class Lyrics extends Component {
    render() {
    console.log("WE ARE IN Lyrics.js BODY >>>>>>>>", this.props.lyrics.lyrics_body)
    console.log("WE ARE IN Lyrics.js EXPLICIT >>>>>>>>>", this.props.lyrics.explicit)
        return(
            <div className='container'>
                <h3>Lyrics</h3>
                {this.props.lyrics.explicit === 1 ? (
                    <p>Lyrics is Explicit</p>
                ) : this.props.lyrics.explicit === 0 ? (
                    <p>Lyrics is not Explicit</p>
                ) : <p></p>}
                <ul>
                    {this.props.lyrics.lyrics_body}
                </ul>
            </div>
        )
    }
}


