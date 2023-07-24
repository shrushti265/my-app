import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useAuth, usePlaylist } from '../../context'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const PlaylistCard = ({playlist}) => {
    const {auth: {token}} = useAuth()
    const {setPlaylists} = usePlaylist()
    const Navigate = useNavigate()

const deletePlaylist = async (id) => {
    const header = {authorization : token};
    const deleteLink = "/api/user/playlists/" + id;
    try {
        const response = await axios.delete(deleteLink, {headers: header})
        console.log(response)
        setPlaylists(response.data.playlists)
    }catch(error){
        console.log(error)
    }
}


  return (
    <div
    class="border-skin text-overlay-card-dimension card-relative video-card"
    key={playlist._id}
    >
     <div
     className='text-overlay-card-img-box'
     >
        <img src="https://i.ytimg.com/vi/EK5Ua8qOLuo/hqdefault.jpg"
        onClick={() => Navigate(`/playlist/${playlist._id}`)}
        />   
    </div> 
    <div className='card-desc skin'>
        {playlist.title}
    </div>
    <div className='card-footer-box card_icons'>
        <AiOutlineEdit
            color='#AB542F'
            size="3rem"
        />
        <AiOutlineDelete
            color='#AB542F' 
            size="3rem"
            onClick={() => deletePlaylist(playlist._id)}
        />
        
    </div>
    </div>
  )
}

export  {PlaylistCard}
