import {
  ALL_VIDEOS_REQUEST,
  ALL_VIDEOS_SUCCESS,
  ALL_VIDEOS_FAIL,
} from "constants/videoContants";

export const videoReducer = (state, action) => {
  switch (action.type) {
    case ALL_VIDEOS_REQUEST:
      return {
        loading: true,
        videos: [],
      };
    case ALL_VIDEOS_SUCCESS:
      return {
        loading: false,
        videos: action.payload,
      };
    case ALL_VIDEOS_FAIL:
      return {
        loading: true,
        error: action.payload,
        videos: [],
      };
    default:
      return state;
  }
};
