import React from "react"
import {VideoCard} from "./videocard"
import { useStore } from "../../context/storeContext"


const Videostore = () => {
  const {storeState} = useStore()
  
  return (
    <>
      <div className='videostore col-9'>
        <p>Popular</p>
        <div className='vidostore_container'>
          {
            storeState.storeItems.map((item, index) => {
              <VideoCard product={item} index={index}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export { Videostore }
