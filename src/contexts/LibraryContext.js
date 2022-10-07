import axios from "axios";
import { ADD_PLAYLIST_SUCCESS, ADD_VIDEO_TO_PLAYLIST_SUCCESS, ALL_PLAYLIST_REQUEST, ALL_PLAYLIST_SUCCESS } from "constants/libraryConstants";
import { useState, createContext, useContext,useReducer,useEffect  } from "react";
import { libraryReducer } from "reducers";
import { useUser } from "./userContext";
import { toast } from 'react-toastify';

const libraryContext = createContext();
const useLibrary = () => useContext(libraryContext);

const LibraryProvier = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    const [libraryState, libraryDispatch] = useReducer(libraryReducer, {
        playlists: []
    })
    const { userState: { token } } = useUser()

    useEffect(() => {
        getAllPlaylists()
    }, [])

    // functinos
    const handleClickModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = (value) => {
        setOpenModal(false);
    };

    const getAllPlaylists = async () => {

        try {
            libraryDispatch({ type: ALL_PLAYLIST_REQUEST })
            const { data } = await axios.get('/api/user/playlists', { headers: { authorization: token } })
            libraryDispatch({ type: ALL_PLAYLIST_SUCCESS, payload: data.playlists })
        } catch (error) {
            console.log(error)
        }
    }

    const createPlaylist = async (title) => {
        try {
            const { data } = await axios.post('/api/user/playlists',
                { playlist: { title } },
                { headers: { authorization: token } })
            libraryDispatch({ type: ADD_PLAYLIST_SUCCESS, payload: data.playlists })
            toast.success("Playlist Created")
        } catch (error) {
            // toast.error(error)
            console.log(error)
        }
    }

    const addVideoToPlaylist = async (playlistId, video) => {
        try {
            const { data } = await axios.post(`/api/user/playlists/${playlistId}`,
                {
                    video
                },
                { headers: { authorization: token } })
            toast.success("Video added to Playlist")
        } catch (error) {
            console.log({error})
        }
    }
    return (
        <libraryContext.Provider value={{ openModal, handleClickModalOpen, handleModalClose, libraryState, getAllPlaylists, createPlaylist, addVideoToPlaylist }}>
            {children}
        </libraryContext.Provider>
    );
}

export { useLibrary, LibraryProvier };