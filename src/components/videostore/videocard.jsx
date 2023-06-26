import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const VideoCard = ({ product, index }) => {
  const { _id, title, description, charactor } = product;

  return (
    <div className="border-skin text-overlay-card-dimension card-relative video-card">
      <div className="text-overlay-card-img-box">
        <img src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`} />
      </div>
      <div class="card-tag tag-overflow ">{charactor}</div>
      <div className="card-desc skin">
        Visit ten places on our planet that are undergoing the biggest changes
        today
        <div class="card-footer-box card__icons">
          <AiOutlineHeart color="#AB542F" size="3rem" />
          <MdOutlinePlaylistPlay color="#ffff" size="4rem" />
          <MdOutlineWatchLater color="#ffff" size="3rem" />
        </div>
      </div>
    </div>
  );
};
