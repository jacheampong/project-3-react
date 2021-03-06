// Track.js
import React from 'react'
import AlbumTwoToneIcon from '@material-ui/icons/AlbumTwoTone';

const Track = (props) => {
  const view = (props.searchType === "topten") 
        ? <i className="material-icons circle green"><b>{props.id}</b></i>
        : <i className="material-icons circle green"><AlbumTwoToneIcon fontSize="large" /></i>

  return (
    <>
      <ul className="collection">
        <li className="collection-item avatar">
        {view}
          <span className="title">
            <b>
            <a 
              target="_blank" 
              rel="noreferrer"
              href={props.track.track.track_share_url}>
                {props.track.track.track_name}
            </a>
            </b>
          </span>
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
