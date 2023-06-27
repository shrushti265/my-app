import React from 'react'
import "./watchLaterPage.css"
import {useWatchLater} from "./../../context/index"
import {WatchLaterCard} from "./watchLaterCard"

const WatchLaterPage = () => {
    const{watchLaterState} = useWatchLater()
  return (
    <>
    <div className="watchlaterpage">
        {
          watchLaterState.watchLaterItems.map((item,index) => <WatchLaterCard product = {item} index = {index}/>)
        }
    </div>
    </>
  )
}

export {WatchLaterPage}