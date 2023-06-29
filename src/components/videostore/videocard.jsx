import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {MdOutlinePlaylistPlay} from "react-icons/md"
import {MdOutlineWatchLater} from"react-icons/md"
import {useLike, useWatchLater, useHistory} from "./../../context/index"
import { checkInWatch } from "../../utils";

const VideoCard = ({ product, index }) => {
  const { _id, title, description, charactor } = product;
const {likeState, likeDispatch} = useLike()
const {watchLaterState, watchLaterDispatch} = useWatchLater()
const {historyState, historyDispatch} = useHistory()

const isHistoryItem = checkInWatch(_id, historyState.historyItems)
const historyHandler = (id, product) => {
  if(!isHistoryItem) {
    historyDispatch({
      type: "ADD_TO_HISTORY",
      payload: product
    })
  }
}

const isItem = checkInWatch(_id, watchLaterState.watchLaterItems)
const addInWatchLaterHandler = (id, product) => {
  if(isItem) {
    watchLaterDispatch({
      type: "REMOVE_FROM_WATCH_LATER",
      payload: id
    })
  }
  else {
    watchLaterDispatch({
      type: "ADD_TO_WATCH_LATER",
      payload: product
    })
  }
}

const findInLike = (id, product) => {
  return product.find(item => item._id === id)
}

const isLike = findInLike(_id, likeState.likeItems)
const likeHandler = (id, product) => {
  if(isLike) {
    likeDispatch({
      type: "REMOVE_FROM_LIKE",
      payload: id
    })
  }
    else {
      likeDispatch({
        type: "ADD_TO_LIKE",
        payload: product
      })
    }
  }

  return (
    <div className="border-skin text-overlay-card-dimension card-relative video-card">
      <div className="text-overlay-card-img-box" 
        onClick={() => historyHandler(_id, product)}  
      >
        <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
      </div>
      <div className="card-tag tag-overflow ">{charactor}</div>
      <div className="card-desc skin">
        Visit ten places on our planet that are undergoing the biggest changes
        today
        <div className="card-footer-box card__icons">
          <AiOutlineHeart color="#AB542F" size="3rem" 
            onClick={() => {likeHandler(_id, product)}}
          />

          <MdOutlinePlaylistPlay color="#AB542F" size="4rem" onClick={() => {}}/>

          <MdOutlineWatchLater color="#ffff" size="3rem" 
          onClick={() => {addInWatchLaterHandler(_id, product)}}
          
          />
        </div>
      </div>
    </div>
  );
}

export {VideoCard}