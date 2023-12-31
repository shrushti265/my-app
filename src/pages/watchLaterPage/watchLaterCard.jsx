import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {MdOutlinePlaylistPlay} from "react-icons/md"
import {MdOutlineWatchLater} from"react-icons/md"
import {useLike, useWatchLater, useHistory,usePlaylist} from "./../../context/index"
import { checkInArray } from '../../utils/index'

const WatchLaterCard = ({product,index}) => {
    const{_id,title,description,charactor} = product
    const{watchLaterDispatch} = useWatchLater()
    const {likeState, likeDispatch} = useLike()
    const { historyState,historyDispatch } = useHistory()
    const {openPlaylistModal, setOpenPlaylistModal} = usePlaylist()

    const isHistoryItem = checkInArray(_id,historyState.historyItems)
    const historyHandler = (id,product) => {
      if(!isHistoryItem){
        historyDispatch({ 
                type:"ADD_TO_HISTORY",
                payload : product
              })
    }}

    const isItem = checkInArray(_id, likeState.likeItems)
    const likeHandler = (id, product) => {
      if(isItem) {
        likeDispatch({
          type: "REMOVE_FORM_LIKE",
          payload: id
        })
      }
      else{
        likeDispatch({
          type: "ADD_TO_LIKE",
          payload: product
        })
      }
    } 

    return (
    <div class="border-skin text-overlay-card-dimension card-relative video-card" key = {index}>
    <div class="text-overlay-card-img-box" onClick={() => historyHandler(_id,product)}>
      <img
      src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
    />
    </div>
    {/* <div class="card-head head-overflow">{title}</div> */}
    <div class="card-tag tag-overflow ">{charactor}</div>
    <div class="card-desc skin">
      Visit ten places on our planet that are undergoing the biggest
      changes today</div>
    <div class="card-footer-box card__icons">
      <AiOutlineHeart color = "#AB542F" size="3rem" onClick={() => likeHandler(_id, product)}/>
      <MdOutlinePlaylistPlay color= "#ffff" size="4rem"/>
      <MdOutlineWatchLater color= "#ffff" size="3rem" onClick = {() => watchLaterDispatch({
        type:"REMOVE_FROM_WATCH_LATER",
        payload: _id
        })}/>
      </div>
      </div>
  )
}

export {WatchLaterCard}