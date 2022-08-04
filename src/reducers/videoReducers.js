import {
  ALL_VIDEOS_REQUEST,
  ALL_VIDEOS_SUCCESS,
  ALL_VIDEOS_FAIL,
  FILTER_BY_NAME,
  UPDATE_VIDEOS,
} from "constants/videoContants";

export const videoReducer = (state, action) => {
  switch (action.type) {
    case ALL_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
        videos: [],
      };
      case ALL_VIDEOS_SUCCESS:
        return {
        ...state,
        loading: false,
        videos: action.payload,
      };
      case ALL_VIDEOS_FAIL:
        return {
        ...state,
        loading: true,
        error: action.payload,
        videos: [],
      };
      case FILTER_BY_NAME:
        return {
          ...state,
          loading: false,
          filterByCategory: action.payload
        }
      case UPDATE_VIDEOS:
        return {
          ...state,
          loading: false,
          videos: action.payload
        }
    default:
      return state;
  }
};
