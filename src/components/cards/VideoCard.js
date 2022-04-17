import React from "react";
import { ProfilePic, Thumbnail } from "images";
import "./videoCard.css";
import { Link } from "react-router-dom";
export const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <img src={Thumbnail} alt="thumnail" />
      </div>
      <div className="bottom">
        <div className="chanel-profile-pic">
          <img src={ProfilePic} alt="chanel-profile" />
        </div>
        <div className="title-wrapper">
          <h2 className="title">
          Nazm Nazm - Lyrical | Bareilly Ki Barfi | Kriti Sanon, Ayushmann Khurrana & Rajkummar Rao | Arko
          </h2>
          <Link to="#" className="video-card-chanel-name">Chanel Name</Link >
          <span className="views">45M views. </span>
          <span className="created-time">1year ago</span>
        </div>
      </div>
    </div>
  );
};
