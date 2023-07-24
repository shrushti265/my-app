import { useContext, createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { storeReducer } from "../reducer/storeReducer";

const StoreContext = createContext();
const StoreProvider = ({children}) => {
const [storeState, storeDispatch] = useReducer(storeReducer, {
    storeItems: [],
    modal: false
})

    useEffect(() => {
        const fetchData = async () => {
            const videoData = await axios.get("/api/videos")
            storeDispatch({ type: "FETCH_DATA", payload: videoData.data.videos})
            console.log(videoData)
        }
        fetchData();
    }, [])

    return (
        <StoreContext.Provider value = {{storeState, storeDispatch}}>
            {children}
        </StoreContext.Provider>
    )
}
const useStore = () => useContext(StoreContext);

export {useStore, StoreProvider};