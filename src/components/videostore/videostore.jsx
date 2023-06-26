import React, { useEffect, useState } from 'react'
import axios from "axios"
import {VideoCard} from "./videocard"

const Videostore = () => {
  const [getVideo, setGetVideo] = useState([])
  useEffect (() => {
    const fetchData = async () => {
      const videoData = await axios.get("./api/videos")
      console.log(videoData)
      setGetVideo(videoData.data.videos)
    }
    fetchData();
  }, [])
  return (
    <>
      <div className='videostore col-9'>
        <p>Popular</p>
        <div className='vidostore_container'>
          {
            getVideo.map((item, index) => <VideoCard product={item} index={index}/>)
          }
        </div>
      </div>
    </>
  )
}

export { Videostore }
