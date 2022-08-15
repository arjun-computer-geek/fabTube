import React from "react";
import { Link } from "react-router-dom";
import "./suggestionVideoCard.css";

export const SuggestionVideoCardExplore = ({
    thumbnail,
    title,
    chanel,
    views,
    createdAt,
    id
  }) => {
  return (
    <Link to={`/watch/${id}`} className="suggestion-video-card-explore">
    <div className="thumbnail-explore">
      <img src={thumbnail} alt="thumnail" />
    </div>
    <div className="title-wrapper">
      <h2 className="title">{title}</h2>
      <div className="video-card-chanel-name">
        {chanel}
      </div>
      <span className="views">{views} views. </span>
      <span className="created-time">{createdAt} ago</span>
    </div>
  </Link>
  )
}
