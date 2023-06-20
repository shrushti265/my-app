import React from 'react'
// import { logo } from '../../assets'
import "./navbar.css"

const Navbar = () => {
  return (
    
      <>
        <div className='navbar'>
            <div className='navbar_logo'>
                <div className='navbar_media'>
                    <img alt=""></img>
                </div>
                <span>VideoLib</span>
            </div>
            <div className='navbar_genre'>
                <span className='navbar_text'>Likes</span>
                <span className='navbar_text'>History</span>
                <span className='navbar_text'>Playlist</span>
                <span className='navbar_text'>Watch Later</span>
            </div>
            <div className='navbar_profile'>
                <span className='navbar_text'>Login</span>
            </div>
        </div>
      </>
    
  )
}

export { Navbar }
