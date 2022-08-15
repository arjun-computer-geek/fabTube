import { HISTORY_VIDEOS_FAIL, HISTORY_VIDEOS_REQUEST, HISTORY_VIDEOS_SUCCESS } from "constants/historyConstants";

  
  export const historyReducer = (state, action) => {
    switch (action.type) {
      case HISTORY_VIDEOS_REQUEST:
        return {
          ...state,
          loading: true,
          historyVideos: []
        };
        case HISTORY_VIDEOS_SUCCESS:
        return {
          ...state,
          loading: false,
          historyVideos: action.payload
        };
        
        
      default:
        return state;
    }
  };
  