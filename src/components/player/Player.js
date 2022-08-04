import { useVideos } from "contexts/videoContex";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Player = () => {
  const { videoId } = useParams();
  const {
    videoState: { videos},
  } = useVideos();
  const isVideoExist = videos.find((ele) => ele._id === videoId);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!isVideoExist){
      navigate('/')
    }
  },[isVideoExist])


  return (
    <>
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
        <span className="views">{isVideoExist?.views} views. </span>
        <span className="created-time">{isVideoExist?.createdAt} </span>
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
