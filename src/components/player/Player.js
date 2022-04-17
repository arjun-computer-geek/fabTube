import { useVideos } from "contexts/videoContex";
import React from "react";
import { useParams } from "react-router-dom";

export const Player = () => {
    const {videoId} = useParams()
    const {
        videoState: { videos, loading },
      } = useVideos();
    const isVideoExist = videos.find(ele => ele._id === videoId)
  return (
    <>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${isVideoExist.video}?modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </>
  );
};
