import React, { useEffect } from 'react'
import "./playlist.css"
import { useAuth, usePlaylist } from '../../context/index'
import axios from "axios";
import { PlaylistCard } from './playlistCard'

const Playlist = () => {
  const [playlists, setPlaylists] = usePlaylist();
  const {
    auth: {token, isAuth},
} = useAuth();
  const header = {authorization : token};
  console.log(playlists)
  const getData = async () => {
    try{
      const response = await axios.get("/api/user/playlists", {
        headers: header,
      })
      setPlaylists(response.data.playlists);
      console.log(response);
    }catch(error){
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    if (isAuth) {
      getData();
    }
  }, []);

  return (
    <div className='playlist-page'>
        {
            playlists.map((playlist) => <PlaylistCard playlist={playlist} />)
        }
    </div>
  )
}

export  {Playlist}