import React, { Fragment, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {MdOutlinePlaylistPlay} from "react-icons/md"
import {MdOutlineWatchLater, MdWatchLater} from"react-icons/md"
import {useLike, useWatchLater, useHistory, useAuth} from "./../../context/index"
import { checkInArray } from "../../utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Modal} from "../Modal/Modal"

const VideoCard = ({ product }) => {
  const { _id, title, description, charactor, modal } = product;
const {likeState, likeDispatch} = useLike()
const {watchLaterState, watchLaterDispatch} = useWatchLater()
const {historyState, historyDispatch} = useHistory()
const [ showModal, setShowModal ] = useState(false);
const {auth} = useAuth();
const navigate = useNavigate();

const isHistoryItem = checkInArray(_id, historyState.historyItems)
const historyHandler = (id, product) => {
  if(auth.token) {
  if(!isHistoryItem) {
    historyDispatch({
      type: "ADD_TO_HISTORY",
      payload: product,
    })
  }}else{
    toast.error("please Login first");
  }
}

const isWatchItem = checkInArray(_id, watchLaterState.watchLaterItems)
const watchLaterHandler = (id, product) => {
  if(auth.token) {

  if(isWatchItem) {
    watchLaterDispatch({
      type: "REMOVE_FROM_WATCH_LATER",
      payload: id
    });
  }
  else {
    watchLaterDispatch({
      type: "ADD_TO_WATCH_LATER",
      payload: product
    });
  }
}else{
  toast.error("plase Login First");
}}

const isLikeItem = checkInArray(_id, likeState.likeItems)
const likeHandler = (id, product) => {
  if(auth.token) {
  isLikeItem ?
    likeDispatch({
      type: "REMOVE_FROM_LIKE",
      payload: id
    }) :
      likeDispatch({
        type: "ADD_TO_LIKE",
        payload: product
    });
  }else {
    toast.error("Please Login First")
  }
  }

  return (
    <Fragment>
      {showModal && <Modal setShowModal={setShowModal} video={product}/>}
    <div 
    className="border-skin text-overlay-card-dimension card-relative video-card"
    key={_id}
    >
      <div 
      className="text-overlay-card-img-box" 
      onClick={() => {
        historyHandler(_id, product)
        navigate(`/video/${_id}`)
      }}  
      >
        <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
      </div>
      <div className="card-tag tag-overflow ">{charactor}</div>
      <div className="card-desc skin">
        Visit ten places on our planet that are undergoing the biggest changes
        today

        <div className="card-footer-box card__icons">         
          { isLikeItem ? 
          (
          <AiFillHeart 
          color="#AB542F" 
          size="3rem" 
          onClick={() => {likeHandler(_id, product)}}
          />
          ) : (
          <AiOutlineHeart 
          color="#AB542F" 
          size="3rem" 
          onClick={() => {likeHandler(_id, product)}}
          />
          )}            

          <MdOutlinePlaylistPlay 
          color="#AB542F" 
          size="4rem" 
          onClick={() => {
            if(auth.token){
              setShowModal(true)
            }else {
              toast.error("please Login First")
            }
          }}
          />

        {isWatchItem ? 
        <MdWatchLater 
          color="#ffff" 
          size="3rem" 
          onClick={() => {watchLaterHandler(_id, product)}}
          /> :
        <MdOutlineWatchLater 
          color="#ffff" 
          size="3rem" 
          onClick={() => {watchLaterHandler(_id, product)}}
          />
        }
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export {VideoCard}