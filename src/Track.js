// Track.js
import React from 'react'
import AlbumTwoToneIcon from '@material-ui/icons/AlbumTwoTone';

const Track = (props) => {
  return (
    <>
      <ul className="collection">
        <li className="collection-item avatar">
          <i className="material-icons circle green"><AlbumTwoToneIcon fontSize="large" /></i>
          <span className="title"><b>{props.track.track.track_name}</b></span>
          <br />
          <p>
            Artist Name: <b>{props.track.track.artist_name}</b> <br />
            Track Album: {props.track.track.album_name} <br />
          </p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">
              Rating <br/>
              {props.track.track.track_rating}
            </i>
          </a>
        </li>
      </ul>
    </>
  )
}
export default Track
