import React, { Component } from "react";
import MUSIX from './MUSIX'
import Artists from './Artists'
import Tracks from './Tracks'
import { getMusixApiCall } from './api'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchType: 'artist',
      searchText: '',
      artists: [],
      tracks: [],
      albums: [],
    }
  }

  render() {
    return(
      <div>
        <h1>React Music Match!</h1>
        <form onSubmit={this.handleSearch}>
          <label>
            <input name="searchText" type="text" required />
          </label>
          <select value={this.state.searchType} onChange={this.handleChange}>
            <option value="artist">Artists</option>
            <option value="track">Tracks</option>
            <option value="album" disabled>Albums</option>
            <option value="lyric" disabled>Lyrics</option>
          </select>
          <button>SEARCH</button>
        </form>
        <Artists artists={this.state.artists} />
        <Tracks tracks={MUSIX.tracks} />
      </div>
    )
  }

  handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.searchText.value
    const type = this.state.searchType
    console.log('Handle Text: ', e.target.searchText.value)
    console.log('Handle Type: ', this.state.searchType)

    /**
     * if artist selected in dropdown, make api call
     * update artits state with response and set 
     * input field to empty
     */
    if (type === "artist") {
      getMusixApiCall(text, type)
      .then((response) => {
        console.log('response: ', response.message.body.artist_list);
        // set state
        this.setState({
          artists: response.message.body.artist_list,
        })
        console.log('after updating state')
      })
      .catch(e => {
        console.log('ERROR getting artist list: ', e.message);
      })
    }

    // set form field to empty
    e.target.searchText.value = ''
    
  }

  /**
   * handleChange: change state value for searchType
   * selected dropdown value
   * @param {*} event 
   */
  handleChange = (event) => {
    console.log('Dropdown: ', event.target.value)
    this.setState({
      searchType: event.target.value
    });
  }

}
