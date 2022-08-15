import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CATEGORIES_VIDEOS_REQUEST,
    CATEGORIES_VIDEOS_SUCCESS,
    CATEGORIES_VIDEOS_FAIL,
  } from "constants/categoryConstants";
  
  export const categoryReducer = (state, action) => {
    switch (action.type) {
      case ALL_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
          categories: [],
        };
      case ALL_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: action.payload,
        };
      case ALL_CATEGORY_FAIL:
        return {
          ...state,
          loading: true,
          error: action.payload,
          categories: [],
        };

        case CATEGORIES_VIDEOS_REQUEST:
          return {
            ...state,
            loading: true,
            categoriesVideos: [],
          };
        case CATEGORIES_VIDEOS_SUCCESS:
          return {
            ...state,
            loading: false,
            categoriesVideos: action.payload,
          };
        case CATEGORIES_VIDEOS_FAIL:
          return {
            ...state,
            loading: true,
            error: action.payload,
            categoriesVideos: [],
          };
      default:
        return state;
    }
  };
  