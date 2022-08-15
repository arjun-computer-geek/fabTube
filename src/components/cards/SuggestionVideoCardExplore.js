import React from "react";
import { Link } from "react-router-dom";
import "./suggestionVideoCard.css";
import { IconButton } from 'components/muiComponents'
import { DeleteIcon } from "assets/muiIcons";

export const SuggestionVideoCardExplore = ({
  type = "",
  thumbnail,
  title,
  chanel,
  views,
  createdAt,
  id,
  handler,
  token
}) => {
  return (<div className="suggestion-card-container">
    
    {type === "dismiss" && <div className="hoverable-icon-container">
      <IconButton style={{ color: "white" }} aria-label="delete" size="large" onClick={() => handler(id, token)} >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>}

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
  </div>
  )
}
