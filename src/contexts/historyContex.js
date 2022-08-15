import axios from 'axios';
import { HISTORY_VIDEOS_FAIL, HISTORY_VIDEOS_REQUEST, HISTORY_VIDEOS_SUCCESS } from 'constants/historyConstants';
import React, { createContext, useContext, useReducer } from 'react'
import { historyReducer } from 'reducers';


const historyContext = createContext();
const useHistory = () => useContext(historyContext);

const HistoryProvider = ({ children }) => {
    const [historyState, historyDispatch] = useReducer(historyReducer, {
        historyVideos: [],
        loading: false
    })



    // functions
    const addVideoToHistory = async (video, token) => {
        try {
            historyDispatch({ type: HISTORY_VIDEOS_REQUEST })
            const { data } = await axios.post('/api/user/history', { video }, { headers: { authorization: token } })
            historyDispatch({ type: HISTORY_VIDEOS_SUCCESS, payload: data.history })
        } catch (error) {

        }
    }

    const deleteHistory = async (videoId, token) => {
        try {
            historyDispatch({ type: HISTORY_VIDEOS_REQUEST })
            const { data } = await axios.delete(`/api/user/history/${videoId}`, { headers: { authorization: token } })
            historyDispatch({ type: HISTORY_VIDEOS_SUCCESS, payload: data.history })
        } catch (error) {
        }
    }

    const clearAllHistory = async (token) => {
        try {
            historyDispatch({ type: HISTORY_VIDEOS_REQUEST })
            const {data} = await axios.delete('/api/user/history/all', { headers: { authorization: token }})
            historyDispatch({ type: HISTORY_VIDEOS_SUCCESS, payload: data.history })
        } catch (error) {

        }
    }
    return (
        <historyContext.Provider value={{ historyState, addVideoToHistory, deleteHistory, clearAllHistory }}>
            {children}
        </historyContext.Provider>
    );
}

export { useHistory, HistoryProvider };