import  { createContext, useContext, useState} from 'react'

const playlistContext = createContext();

const PlaylistProvider = ({children}) => {

    const [playlists, setPlaylists] = useState([])
    const [playlistName, setPlaylistName] = useState([])

    return (
        <playlistContext.Provider value={{ playlists, setPlaylists, playlistName, setPlaylistName }}>
            {children}
        </playlistContext.Provider>
    );
}
const usePlaylist = () => useContext(playlistContext);

export {usePlaylist, PlaylistProvider}
