import React from 'react'
import {Videostore} from "./../../components/index"
import { usePlaylist } from '../../context/index'

const Home = () => {
  const {openPlaylistModal} = usePlaylist()
  return (
    <>
    <div className='home'>
      <Videostore />   
    </div>
    </>
  )
}

export { Home }
