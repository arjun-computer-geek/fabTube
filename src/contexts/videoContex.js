import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import {
  ALL_VIDEOS_FAIL,
  ALL_VIDEOS_REQUEST,
  ALL_VIDEOS_SUCCESS,
} from "constants/videoContants";
import { videoReducer } from "reducers";

const videoContext = createContext();
const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    loading: false,
    videos: [],
  });

  //   runnig fetch video on effect
  useEffect(() => {
    fetchVideos();
  }, []);

  //   functions

  const fetchVideos = async () => {
    try {
      videoDispatch({ type: ALL_VIDEOS_REQUEST });

      // making GET reques to server
      const { data } = await axios.get("/api/videos");
      videoDispatch({ 
          type: ALL_VIDEOS_SUCCESS, 
          payload: data.videos 
        });
    } catch (error) {
      videoDispatch({
        type: ALL_VIDEOS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  return (
    <videoContext.Provider value={{ videoState }}>
      {children}
    </videoContext.Provider>
  );
};
export { useVideos, VideoProvider };
