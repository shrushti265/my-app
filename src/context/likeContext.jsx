import React, { createContext, useContext, useReducer } from 'react'
import {likeReducer} from './../reducer/likeReducer'

const LikeContext = createContext() 
const LikeProvider = ({children}) => {
const [likeState, likeDispatch] = useReducer(likeReducer, {
    likedItems: []
})

  return (
    <div>
      <LikeContext.Provider value= {{likeState, likeDispatch}}>
        {children}
      </LikeContext.Provider>
    </div>
  )
}

const useLike = () => useContext(LikeContext);

export {useLike, LikeProvider}
