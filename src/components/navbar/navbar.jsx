import React from "react";
// import { logo } from '../../assets'
import "./navbar.css";
import {Link} from 'react-router-dom'
import {useLike, useWatchLater, useHistory} from './../../context/index'

const Navbar = () => {
  const {likeState} = useLike()
  const {watchLaterState} = useWatchLater()
  const {historyState} = useHistory()
  return (
    <>
      <div className="navbar">
        <Link to = "./">
          {' '}
        <div className="navbar_logo">
          <div className="navbar_media">
            {/* <img src="https://finema.vercel.app/static/media/landing-1.d39b782eeebf6132c02b.png" alt=""></img> */}
          </div>
          {/* <span>VideoLib</span> */}
          <div className="navbar_logoname">VideoLib</div>
        </div>
        </Link>
        <div className="navbar_genre">
          <div className="navbar_badge">
            <Link to = "./like ">
              <span className="navbar_text">Likes</span>
            </Link>
              <span className="navbar_badge_number navbar_text">{likeState.likeItems.length}</span>
          </div>
          
          <Link to = "./history">
            <span className="navbar_text">History</span>
          </Link>
          <div className="navbar_badge">
            <Link to = "./playlist">
            <span className="navbar_text">Playlist</span>
            </Link>
            <span className="navbar_badge_number navbar_text">{}</span>
          </div>

          <div className="navbar_badge">
            <Link to ="./watchLater">
            <span className="navbar_text">Watch later</span>
            </Link>
            <span className="navbar_badge_number navbar_text">{watchLaterState.watchLaterItems.length}</span>
          </div>
        </div>
        <div className="navbar_profile">
          <Link to = "./login" > 
          {""} 
          <span className="navbar_text"> Login </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Navbar };
