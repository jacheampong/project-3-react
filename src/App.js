import React, { Component } from "react";
import MUSIX from './MUSIX'
import Artists from './Artists'
import Tracks from './Tracks'

export default class App extends Component {

  render() {
    return(
      <div>
        <h1>React Music Match!</h1>
        <form onSubmit={this.handleSearch}>
          <label>
            <input name="searchText" type="text" />
          </label>
          <button>SEARCH</button>
        </form>
        <Artists artists={MUSIX.artists} />
        <Tracks tracks={MUSIX.tracks} />
      </div>
    )
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log('Handle Search', e.target.searchText.value)
    
  }

}
