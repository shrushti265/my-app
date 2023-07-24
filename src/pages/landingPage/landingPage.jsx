import React from 'react'
import "./landingPage.css"
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className='banner-boxy col-12'>
        <div className='banner-text col-6'>
            <div className='banner-heading'>
                {" "}
                <span className='banner-design-text'>
                    {" "}
                    Think fast, go farther with our simple solutions to{" "}
                    <span className="finance-text"> finance </span>
                </span>
            </div>
            <Link to ="/videos">
                <button className='button primary_btn'>Explore</button>
            </Link>
        </div>  
        <div className='banner-images col-6'>
            <img  alt="" />
        </div>
    </div>
  )
}

export  {LandingPage}
