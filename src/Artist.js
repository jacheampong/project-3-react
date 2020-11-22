// Artist.js

import React from "react";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";

const Artist = (props) => {
  return (
    <>
      <ul className="collection">
        <li className="collection-item avatar">
          <i className="material-icons circle green">
              {/* {
                  props.artist.artist.artist_twitter_url === ""
                  ? <PermIdentityTwoToneIcon fontSize="large" />
                  : <img src={props.artist.artist.artist_twitter_url+'/photo'} alt="images" />
                  
              } */}
            <PermIdentityTwoToneIcon fontSize="large" />
            </i>
          <span className="title"><b>{props.artist.artist.artist_name}</b></span>
          <p>
            Country: {props.artist.artist.artist_country} <br />
            Twitter URL:  
                 <a 
                    target="_blank" 
                    rel="noreferrer"
                    href={props.artist.artist.artist_twitter_url+'/photo'}>
                     {props.artist.artist.artist_twitter_url}
                </a> <br />
               Credits: 
               {
                    (props.artist.artist.artist_credits.length === 0)
                    ? (props.artist.artist.artist_credits.length)
                    : (props.artist.artist.artist_credits.artist_list.map((credit, index) => {
                        // console.log('this credit = ', credit.artist.artist_id+index)
                        // return credit.artist.artist_name + ', '
                        return (<div className="container">
                            <a 
                            target="_blank" 
                            rel="noreferrer"
                            href={credit.artist.artist_twitter_url+'/photo'}
                            key={credit.artist.artist_id+index}>
                             {credit.artist.artist_name}
                            </a> <br />
                            </div> 
                        )
                    }))
                }
                {/* {props.artist.artist.artist_credits.artist_list.length} */}
          </p>
          <a href="#!" className="secondary-content">
          {props.artist.artist.artist_rating}<StarTwoToneIcon fontSize="large" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Artist;
