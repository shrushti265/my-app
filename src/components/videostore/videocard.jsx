import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {MdOutlinePlaylistPlay} from "react-icons/md"
import {MdOutlineWatchLater} from"react-icons/md"
import {useLike, useWatchLater, useHistory} from "./../../context/index"

const VideoCard = ({ product, index }) => {
  const { _id, title, description, charactor } = product;
const {likeState, likeDispatch} = useLike()
const {watchLaterDispatch} = useWatchLater()
const {historyDispatch} = useHistory()

console.log(likeState)
  return (
    <div className="border-skin text-overlay-card-dimension card-relative video-card">
      <div className="text-overlay-card-img-box" 
        onClick={() => historyDispatch({
          type: 'ADD_TO_HISTORY',
          payload: product
        })}  
      >
        <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
      </div>
      <div className="card-tag tag-overflow ">{charactor}</div>
      <div className="card-desc skin">
        Visit ten places on our planet that are undergoing the biggest changes
        today
        <div className="card-footer-box card__icons">
          <AiOutlineHeart color="#AB542F" size="3rem" 
            onClick={() => likeDispatch({
            type:"ADD_To_LIKE",
            payload: product
          })}
          />

          <MdOutlinePlaylistPlay color="#ffff" size="4rem" />

          <MdOutlineWatchLater color="#ffff" size="3rem" 
          onClick={() => watchLaterDispatch({
            type: "WATCH_LATER",
            payload: {_id, title, description, charactor}
          })}
          />
        </div>
      </div>
    </div>
  );
};

export {VideoCard}