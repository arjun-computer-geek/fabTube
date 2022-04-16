import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLaterOutlined";
import LikeIcon from "@mui/icons-material/ThumbUpAltOutlined";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <Link className="sidebar-bar" to="#">
          <HomeIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Home</span>
        </Link>
        <Link className="sidebar-bar" to="#">
          <ExploreIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Explore</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <Link className="sidebar-bar" to="#">
          <VideoLibraryIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Library</span>
        </Link>
        <Link className="sidebar-bar" to="#">
          <HistoryIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">History</span>
        </Link>
        <Link className="sidebar-bar" to="#">
          <WatchLaterIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Watch later</span>
        </Link>
        <Link className="sidebar-bar" to="#">
          <LikeIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Liked videos</span>
        </Link>
      </div>
    </aside>
  );
};
