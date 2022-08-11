import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";

import {
  ALL_VIDEOS_FAIL,
  ALL_VIDEOS_REQUEST,
  ALL_VIDEOS_SUCCESS,
  FILTER_BY_NAME,
  UPDATE_VIDEOS,
} from "constants/videoContants";
import { categoryReducer, videoReducer } from "reducers";
import {
  ALL_CATEGORY_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  CATEGORIES_VIDEOS_FAIL,
  CATEGORIES_VIDEOS_REQUEST,
  CATEGORIES_VIDEOS_SUCCESS,
} from "constants/categoryConstants";

const videoContext = createContext();
const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    loading: false,
    videos: [],
    filterByCategory: false,
  });

  const [categoryState, categoryDispatch] = useReducer(categoryReducer, {
    loading: false,
    categories: [],
    categoriesVideos: []
  });

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

  const fetchCategoriesVideo = async (category = "Trending") => {
    try {
      categoryDispatch({ type: CATEGORIES_VIDEOS_REQUEST })
      const { data } = await axios(`/api/categories/${category}`)
      categoryDispatch({
        type: CATEGORIES_VIDEOS_SUCCESS,
        payload: data.videos
      })
    } catch (err) {
      categoryDispatch({
        type: CATEGORIES_VIDEOS_FAIL,
        payload: err.response.data.error
      })
    }
  }

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

  const filterByCategoryName = (name) => {
    let filteredData = videoState.videos;
    console.log(videoState.filterByCategory)
    videoDispatch({
      type: FILTER_BY_NAME,
      payload: !videoState.filterByCategory,
    });

    if (videoState.filterByCategory) {
      filteredData = filteredData.filter(
        (video) => video.categoryName === name
      );
    }

    videoDispatch({
      type: UPDATE_VIDEOS,
      payload: filteredData,
    });
  };
  return (
    <videoContext.Provider
      value={{ videoState, categoryState, filterByCategoryName, fetchCategoriesVideo }}
    >
      {children}
    </videoContext.Provider>
  );
};
export { useVideos, VideoProvider };
