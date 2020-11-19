
// Artist.js

import React from 'react'; 

const Artist = (props) => {
    return (
    <>    
        <h4>Artist: {props.artist.artist.artist_name}</h4>
        <ul>
            <li>Country From - {props.artist.artist.artist_country}</li>
            <li>Artist Rating - {props.artist.artist.artist_rating}</li>
            <li>Twitter URL - {props.artist.artist.artist_twitter_url}</li>
            <li>Restricted ? - {props.artist.artist.restricted}</li>
            <li>Updated Time - {props.artist.artist.updated_time}</li>
            <li>Begin Date - {props.artist.artist.begin_date}</li>
            <li>End Date - {props.artist.artist.end_date}</li>
        </ul>
    </>
    )
}

export default Artist




