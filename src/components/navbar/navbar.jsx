import React from "react";
// import { logo } from '../../assets'
import "./navbar.css";
import { Link } from "react-router-dom";
import {
  useLike,
  useWatchLater,
  useAuth,
  usePlaylist,
} from "./../../context/index";
import { toast } from "react-toastify";

const Navbar = () => {
  const { likeState } = useLike();
  const { watchLaterState } = useWatchLater();
  // const {historyState} = useHistory()
  const { auth, setAuth } = useAuth();
  const { playlists } = usePlaylist();

  const clickHandler = () => {
    if (!auth.isAuth) {
      toast.error("Login First");
    }
  };
  return (
    <>
      <div className="navbar">
        <Link to="/">
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
            <Link to="/like" className="navbar_text" onClick={clickHandler}>
              Likes
            </Link>
            <span className="navbar_badge_number navbar_text">
              {likeState.likeItems.length}
            </span>
          </div>

          <Link to="/history">
            <span className="navbar_text" onClick={clickHandler}>
              History
            </span>
          </Link>

          <div className="navbar_badge">
            <Link to="/playlist">
              <span className="navbar_text" onClick={clickHandler}>
                Playlist
              </span>
            </Link>
            <span className="navbar_badge_number navbar_text">
              {playlists.length}
            </span>
          </div>

          <div className="navbar_badge">
            <Link to="./watchLater">
              <span className="navbar_text" onClick={clickHandler}>
                Watch later
              </span>
            </Link>
            <span className="navbar_badge_number navbar_text">
              {watchLaterState.watchLaterItems.length}
            </span>
          </div>
        </div>
        <div className="navbar_profile_box">
          <p style={{ color: "#AB542F" }}>
            {" "}
            Hi, {auth.isAuth ? auth.userName : "user"}
          </p>
          <div className="navbar_profile">
            <Link to="./login">
              <span
                onClick={() => {
                  if (auth.token) {
                    setAuth((auth) => ({
                      ...auth,
                      token: "",
                      userName: "User",
                    }));
                    toast.success("Logout Successfully");
                  }
                }}
                className="navbar_text"
              >
                {auth.token ? "Logout" : "Login"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
