import axios from 'axios';
import { WATCH_LATER_VIDEOS_REQUEST, WATCH_LATER_VIDEOS_SUCCESS } from 'constants/watchLaterConstants';
import React, { createContext, useContext, useReducer } from 'react'
import { toast } from 'react-toastify';
import { watchLaterReducer } from 'reducers';


const watchLaterContext = createContext();
const useWatchLater = () => useContext(watchLaterContext);

const WatchLaterProvider = ({ children }) => {
    const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
        watchLaterVideos: [],
        loading: false
    })

    // functions
    const addToWatchLater = async (video, token) => {
        try {
            watchLaterDispatch({ type: WATCH_LATER_VIDEOS_REQUEST })
            const { data } = await axios.post('/api/user/watchlater', { video }, { headers: { authorization: token } })
            watchLaterDispatch({ type: WATCH_LATER_VIDEOS_SUCCESS, payload: data.watchlater })
            toast.success("Added to watch later")
        } catch (error) {
            toast.error("Video Already Added")
        }
    }

    const removeFromWatchLater = async (vidoeId, token) => {
        try {
            watchLaterDispatch({ type: WATCH_LATER_VIDEOS_REQUEST })
            const { data } = await axios.delete(`/api/user/watchlater/${vidoeId}`, { headers: { authorization: token } })
            watchLaterDispatch({ type: WATCH_LATER_VIDEOS_SUCCESS, payload: data.watchlater })
            toast.success("Video removed from watch later")
        } catch (error) {
            toast.error("something went wrong...")
        }

    }
    return (
        <watchLaterContext.Provider value={{ watchLaterState, addToWatchLater, removeFromWatchLater }}>
            {children}
        </watchLaterContext.Provider>
    );
}

export { useWatchLater, WatchLaterProvider };