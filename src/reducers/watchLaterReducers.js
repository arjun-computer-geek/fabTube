import { WATCH_LATER_VIDEOS_FAIL, WATCH_LATER_VIDEOS_REQUEST, WATCH_LATER_VIDEOS_SUCCESS } from "constants/watchLaterConstants";


export const watchLaterReducer = (state, action) => {
  switch (action.type) {
    case WATCH_LATER_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
        watchLaterVideos: []
      };

    case WATCH_LATER_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        watchLaterVideos: action.payload
      };
      
    case WATCH_LATER_VIDEOS_FAIL:
      return {
        ...state,
        loading: true,
        watchLaterVideos: null,
        error: action.payload
      };


    default:
      return state;
  }
};
