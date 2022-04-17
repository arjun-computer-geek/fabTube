import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import {
  ALL_VIDEOS_FAIL,
  ALL_VIDEOS_REQUEST,
  ALL_VIDEOS_SUCCESS,
} from "constants/videoContants";
import { categoryReducer, videoReducer } from "reducers";
import {
  ALL_CATEGORY_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
} from "constants/categoryConstants";

const videoContext = createContext();
const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    loading: false,
    videos: [],
  });

  const [categoryState, categoryDispatch] = useReducer(categoryReducer);

  //   runnig fetch video on effect
  useEffect(() => {
    fetchCategory();
    fetchVideos();
  }, []);

  //   functions

  const fetchCategory = async () => {
    try {
      categoryDispatch({ type: ALL_CATEGORY_REQUEST });

      const { data } = await axios.get("/api/categories");
      categoryDispatch({
        type: ALL_CATEGORY_SUCCESS,
        payload: data.categories,
      });
    } catch (error) {
      videoDispatch({
        type: ALL_CATEGORY_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  const fetchVideos = async () => {
    try {
      videoDispatch({ type: ALL_VIDEOS_REQUEST });

      // making GET reques to server
      const { data } = await axios.get("/api/videos");
      videoDispatch({
        type: ALL_VIDEOS_SUCCESS,
        payload: data.videos,
      });
    } catch (error) {
      videoDispatch({
        type: ALL_VIDEOS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  return (
    <videoContext.Provider value={{ videoState, categoryState }}>
      {children}
    </videoContext.Provider>
  );
};
export { useVideos, VideoProvider };
