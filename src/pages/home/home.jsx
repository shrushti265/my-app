import React from 'react'
import {Videostore,AddedVideo} from "./../../components/index"

const Home = () => {
  return (
    <>
    <div className='home'>
      <Videostore />
      <AddedVideo />
    </div>
    </>
  )
}

export { Home }
