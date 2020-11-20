// Track.js
import React from 'react'
const Track = (props) => {
  return (
    <>
      <h4>Track: {props.track.track_name}</h4>
      <ul>
        <li>Track Rating: {props.track.track_rating}</li>
      </ul>
    </>
  )
}
export default Track
