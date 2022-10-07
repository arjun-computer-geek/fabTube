import { ADD_PLAYLIST_FAIL, ADD_PLAYLIST_SUCCESS, ADD_VIDEO_TO_PLAYLIST_FAIL, ADD_VIDEO_TO_PLAYLIST_SUCCESS, ALL_PLAYLIST_FAIL, ALL_PLAYLIST_REQUEST, ALL_PLAYLIST_SUCCESS } from "constants/libraryConstants"

export const libraryReducer = (state, action) => {
    switch (action.type) {
        case ALL_PLAYLIST_REQUEST:
            return {
                ...state,
                loading: true,
                playlists: []
            }
        case ALL_PLAYLIST_SUCCESS:
        case ADD_PLAYLIST_SUCCESS:
        case ADD_VIDEO_TO_PLAYLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                playlists: action.payload
            }
        case ALL_PLAYLIST_FAIL:
        case ADD_PLAYLIST_FAIL:
        case ADD_VIDEO_TO_PLAYLIST_FAIL:
            return {
                ...state,
                loading: true,
                playlists: [],
                error: action.payload
            }
        default:
            return state;
    }
}