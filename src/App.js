import React, { Component } from "react";
import MUSIX from './MUSIX'
import Artists from './Artists'
import Tracks from './Tracks'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchType: 'artist',
      searchText: '',
    }
  }

  render() {
    return(
      <div>
        <h1>React Music Match!</h1>
        <form onSubmit={this.handleSearch}>
          <label>
            <input name="searchText" type="text" />
          </label>
          <select value={this.state.searchType} onChange={this.handleChange}>
            <option value="artist">Artists</option>
            <option value="track">Tracks</option>
            <option value="album" disabled>Albums</option>
            <option value="lyric" disabled>Lyrics</option>
          </select>
          <button>SEARCH</button>
        </form>
        <Artists artist={MUSIX.artists} />
        <Tracks tracks={MUSIX.tracks} />
      </div>
    )
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log('Handle Text: ', e.target.searchText.value)
    console.log('Handle Type: ', this.state.searchType)
    
  }

  handleChange = (event) => {
    console.log('Dropdown: ', event.target.value)
    this.setState({
      searchType: event.target.value
    });
  }

}
