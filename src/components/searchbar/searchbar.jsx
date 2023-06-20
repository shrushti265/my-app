import React from 'react'
import "./searchbar.css"

const Searchbar = () => {
  return (
    <>
      <div className='searchbar'>
        <div className='searchbar_category'>
            <span>Podcast</span>
            <span>Investment</span>
            <span>Finance</span>
            <span>Crypto</span>
        </div>
        <div className='Searchbar_input'>
            <input type='text'/>
            <button className='btn btn-primary'> Search </button>
        </div>
      </div>
    </>
  )
}

export {Searchbar}
