import { useHistory } from "contexts/historyContex";
import { useUser } from "contexts/userContext";
import { useVideos } from "contexts/videoContex";
import { Button } from 'components/muiComponents';
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LibraryIcon, LikeIcon, LikeIconAlt, ShareIcon, WatchLaterIcon, WatchLaterIconAlt } from "assets/muiIcons";
import { useLike } from "contexts/LikeContext";
import { useWatchLater } from "contexts/watchaLaterContext";
import { useLibrary } from "contexts/LibraryContext";
import LibraryModal from "components/modal/LibraryModal";

export const Player = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [iswatchLater, setIsWatchLater] = useState(false)

  const navigate = useNavigate()
  const { videoId } = useParams();

  const { addVideoToHistory } = useHistory()
  const { videoState: { videos } } = useVideos();
  const { userState: { user, token } } = useUser()
  const { addLikedVideo, deleteLikedVideo } = useLike()
  const { addToWatchLater, removeFromWatchLater } = useWatchLater()
  const { handleClickModalOpen, } = useLibrary()

  const isVideoExist = videos.find((ele) => ele._id === videoId);

  useEffect(() => {
    if (!isVideoExist) {
      navigate('/')
    }
  }, [isVideoExist])

  useEffect(() => {
    if (user)
      addVideoToHistory(isVideoExist, token)
  }, [])

  const addtoWatchLaterHandler = () => {
    setIsWatchLater(true)
    addToWatchLater(isVideoExist, token)
  }

  const removeFromWatchLaterHandler = () => {
    setIsWatchLater(false)
    removeFromWatchLater(videoId, token)
  }
  const likeHandler = () => {
    setIsLiked(true)
    addLikedVideo(isVideoExist, token)
  }

  const disLikeHandler = () => {
    setIsLiked(false)
    deleteLikedVideo(videoId, token)
  }
  return (
    <>
    <LibraryModal video={isVideoExist}/>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${isVideoExist?.video}?modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 className="video-details-title">{isVideoExist?.title}</h2>
      <div className="player-likes-row">
        <div>
          <span className="views">{isVideoExist?.views} views. </span>
          <span className="created-time">{isVideoExist?.createdAt} </span>
        </div>

        <div className="like-icon-btns">
          {
            isLiked
              ?
              <Button
                variant="text"
                startIcon={<LikeIconAlt sx={{ color: "white" }} />}
                sx={{ color: "white", marginLeft: "1rem" }}
                onClick={disLikeHandler}
              >
                LIKE
              </Button>
              :
              <Button
                variant="text"
                startIcon={<LikeIcon sx={{ color: "white" }} />}
                sx={{ color: "white", marginLeft: "1rem" }}
                onClick={likeHandler}
              >
                LIKE
              </Button>
          }

          {
            iswatchLater ?
              <Button
                variant="text"
                startIcon={<WatchLaterIconAlt sx={{ color: "white" }} />}
                sx={{ color: "white", marginLeft: "1rem" }}
                onClick={removeFromWatchLaterHandler}
              >
                WATCH LATER
              </Button>
              :
              <Button
                variant="text"
                startIcon={<WatchLaterIcon sx={{ color: "white" }} />}
                sx={{ color: "white", marginLeft: "1rem" }}
                onClick={addtoWatchLaterHandler}
              >
                WATCH LATER
              </Button>
          }


          <Button
            variant="text"
            startIcon={<ShareIcon sx={{ color: "white" }} />}
            sx={{ color: "white", marginLeft: "1rem" }}>
            SHARE
          </Button>
          <Button
            variant="text"
            startIcon={<LibraryIcon sx={{ color: "white" }} />}
            sx={{ color: "white", marginLeft: "1rem" }}
            onClick={handleClickModalOpen}
          >
            SAVE
          </Button>
        </div>
      </div>
      <div className="bottom player-bottom">
        <div className="chanel-profile-pic">
          <img src={isVideoExist?.chanel_pic} alt="chanel-profile" />
        </div>
        <div className="title-wrapper">
          <Link to="#" className="video-player-card-chanel-name">
            {isVideoExist?.creator}
          </Link>
          <p>{isVideoExist?.description} </p>
        </div>
      </div>
    </>
  );
};
