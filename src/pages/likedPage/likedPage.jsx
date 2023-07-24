import React from 'react'
import "./likedPage.css"
import {LikeCard} from "./likeCard"
import {useLike, usePlaylist} from "./../../context/index"
import { Modal } from '../../components/Modal/Modal'

const LikedPage = () => {
    const {likeState} = useLike();
    const {openPlaylistModal} = usePlaylist();
  return (
    <>
    <div className='likePage'>
      {openPlaylistModal && <Modal/>}
      {likeState.likeItems.map((item, index) => (
        <LikeCard product={item} index={index}/>
      ))}
    </div>
    </>
  )
}

export { LikedPage}
