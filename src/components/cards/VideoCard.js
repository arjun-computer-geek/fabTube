import React from "react";
import "./videoCard.css";
import { Link } from "react-router-dom";
export const VideoCard = ({
  thumbnail,
  ProfilePic,
  title,
  chanel,
  views,
  createdAt,
}) => {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <img src={thumbnail} alt="thumnail" />
      </div>
      <div className="bottom">
        <div className="chanel-profile-pic">
          <img src={ProfilePic} alt="chanel-profile" />
        </div>
        <div className="title-wrapper">
          <h2 className="title">{title}</h2>
          <Link to="#" className="video-card-chanel-name">
            {chanel}
          </Link>
          <span className="views">{views} views. </span>
          <span className="created-time">{createdAt} ago</span>
        </div>
      </div>
    </div>
  );
};
