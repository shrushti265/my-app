import React from "react";
// import { logo } from '../../assets'
import "./navbar.css";
import {Link} from 'react-router-dom'
import {useLike} from './../../context/index'

const Navbar = () => {
  const {likeState} = useLike()
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">
          <div className="navbar_media">
            {/* <img src="https://finema.vercel.app/static/media/landing-1.d39b782eeebf6132c02b.png" alt=""></img> */}
          </div>
          <span>VideoLib</span>
          <div className="navbar_logoname">VideoLib</div>
        </div>
        <div className="navbar_genre">
          <div className="navbar_badge">
            <Link to = "./like ">
              <span className="navbar_text">Likes</span>
            </Link>
              <span className="navbar_badge_number navbar_text">{likeState.likeItems.length}</span>
          </div>
          <span className="navbar_text">History</span>
          <div className="navbar_badge">
            <span className="navbar_text">Playlist</span>
            <span className="navbar_badge_number navbar_text">2</span>
          </div>

          <div className="navbar_badge">
            <span className="navbar_text">Watch later</span>
            <span className="navbar_badge_number navbar_text">2</span>
          </div>
        </div>
        <div className="navbar_profile">
          <span className="navbar_text">Login</span>
        </div>
      </div>
    </>
  );
};

export { Navbar };
