import { LIKE_VIDEOS_FAIL, LIKE_VIDEOS_REQUEST, LIKE_VIDEOS_SUCCESS } from "constants/likeConstants";


export const likeReducer = (state, action) => {
  switch (action.type) {
    case LIKE_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
        likeVideos: []
      };

    case LIKE_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        likeVideos: action.payload
      };
      
    case LIKE_VIDEOS_FAIL:
      return {
        ...state,
        loading: true,
        likeVideos: null,
        error: action.payload
      };


    default:
      return state;
  }
};
