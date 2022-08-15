import axios from 'axios';
import { LIKE_VIDEOS_REQUEST, LIKE_VIDEOS_SUCCESS } from 'constants/likeConstants';
import React, { createContext, useContext, useReducer } from 'react'
import { toast } from 'react-toastify';
import { likeReducer } from 'reducers';


const likeContext = createContext();
const useLike = () => useContext(likeContext);

const LikeProvider = ({ children }) => {
    const [likeState, likeDispatch] = useReducer(likeReducer, {
        likeVideos: [],
        loading: false
    })
    
    // functions
    const addLikedVideo = async (video, token) => {
        try {
            likeDispatch({ type: LIKE_VIDEOS_REQUEST })
            const { data } = await axios.post('/api/user/likes', { video }, { headers: { authorization: token } })
            likeDispatch({ type: LIKE_VIDEOS_SUCCESS, payload: data.likes })
            toast.success("Like added")
        } catch (error) {
            toast.error("Video Already Added")
        }
    }

    const deleteLikedVideo = async (vidoeId, token) => {
        try {
            likeDispatch({ type: LIKE_VIDEOS_REQUEST })
            const { data } = await axios.delete(`/api/user/likes/${vidoeId}`, { headers: { authorization: token } })
            likeDispatch({ type: LIKE_VIDEOS_SUCCESS, payload: data.likes })
            toast.success("Video removed")
        } catch (error) {
            toast.error("something went wrong...")
        }

    }
    return (
        <likeContext.Provider value={{ likeState, deleteLikedVideo, addLikedVideo,  }}>
            {children}
        </likeContext.Provider>
    );
}

export { useLike, LikeProvider };