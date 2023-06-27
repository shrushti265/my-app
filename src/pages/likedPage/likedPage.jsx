import React from 'react'
import "./likedPage.css"
import {LikeCard} from "./likeCard"
import {useLike} from "./../../context/index"

const LikedPage = () => {
    const {likeState} = useLike()
    console.log(likeState.likeItems)
  return (
    <div className='likePage'>
      {
        likeState.likeItems.map((item, index) => <LikeCard product={item} index={index} />)
      }
    </div>
  )
}

export { LikedPage}
