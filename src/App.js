import React, { Component } from 'react'
import Artists from './Artists'
import Tracks from './Tracks'
import { getMusixApiCall } from './api'
import 'normalize.css';
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchType: 'topten',
      searchText: '',
      artists: [],
      tracks: [],
      albums: [],
    }
  }

  /**
   * componentDidMount is invoked immediately after a 
   * component is mounted
   * calls callTopTen method
   */
  componentDidMount(){
    this.callTopTen()
  }

  render() {
    return (
      <div className="container">
        <h2>🎤 Musix 🎶  Match 🎧</h2>
        <form onSubmit={this.handleSearch}>
          <label>
            <input name="searchText" type="text" required />
          </label>
          <select className="browser-default" value={this.state.searchType} onChange={this.handleChange}>
            <option value="topten">Top 10</option>
            <option value="artist">Artists</option>
            <option value="track">Tracks</option>
            <option value="album" disabled>
              Albums
            </option>
            <option value="lyric" disabled>
              Lyrics
            </option>
          </select>
          <br />
          <button>SEARCH</button>
        </form>

        {/* use switch function to determine component to render */}
        {(() => {
          switch (this.state.searchType) {
            case "topten":  return <Tracks tracks={this.state.tracks} />;
            case "artist":   return <Artists artists={this.state.artists} />;
            case "track": return <Tracks tracks={this.state.tracks} />;
            // case "lyric": return <Lyrics lyrics={this.state.lyrics} />;
            // case "album":  return <Artists artists={this.state.tracks} />;
            default:      return <Tracks tracks={this.state.tracks} />;
          }
        })()}

      </div>
    )
  }

  handleSearch = (e) => {
    e.preventDefault()
    const text = e.target.searchText.value
    const type = this.state.searchType
    console.log('Handle Text: ', e.target.searchText.value)
    console.log('Handle Type: ', this.state.searchType)

    /**
     * if artist selected in dropdown, make api call
     * update artits state with response and set
     * input field to empty
     */
    getMusixApiCall(text, type)
      .then((response) => {
        if (type === 'artist') {
          console.log('response: ', response.message.body.artist_list)
          // set artits state
          this.setState({
            artists: response.message.body.artist_list
              ? response.message.body.artist_list
              : [],
          })
        }
        if (type === 'track') {
          console.log(`Looking for ${type}'s ${text}`)
          console.log('response: ', response.message.body)
          // set track state if response true
          // or set to empty array
          this.setState({
            tracks: response.message.body.track_list
              ? response.message.body.track_list
              : [],
          })
        }

        console.log('after updating state')
      })
      .catch((e) => {
        console.log('ERROR getting artist list: ', e.message)
      })

    // set form field to empty
    e.target.searchText.value = ''
  }

  /**
   * handleChange: change state value for searchType
   * selected dropdown value. Call callTopTen()
   * if topten dropdown is selected
   * @param {*} event
   */
  handleChange = (event) => {
    console.log('Dropdown: ', event.target.value)
    this.setState({
      searchType: event.target.value,
      searchText: 'Top Ten'
    })

    // call callTopTen 
    if('topten' === event.target.value) {
      this.callTopTen()
    } else {
      // set tracks to null
      this.setState({
        tracks: [],
      })
    }
  }

  /**
   * callTopTen 
   */
  callTopTen = () => {
    getMusixApiCall("top", "chart")
      .then((response) => {
        // console.log(`Looking for ${type}'s ${text}`)
        console.log('response: ', response.message.body)
        // set track state if response true
        // or set to empty array
        this.setState({
          tracks: response.message.body.track_list
            ? response.message.body.track_list
            : [],
        })

        console.log('after updating state')
      })
      .catch((e) => {
        console.log('ERROR getting artist list: ', e.message)
      })
  } 
}
