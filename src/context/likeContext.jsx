import React, { createContext, useContext } from 'react'

const LikeContext = createContext() 
const LikeProvider = ({children}) => {
  return (
    <div>
      <LikeContext.Provider value= {{value : 6}}>
        {children}
      </LikeContext.Provider>
    </div>
  )
}

const useLike = () => useContext(LikeContext);

export {useLike, LikeProvider}
