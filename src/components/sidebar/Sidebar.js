import { ExploreIcon, HistoryIcon, HomeIcon, LikeIcon, VideoLibraryIcon, WatchLaterIcon } from "assets/muiIcons";
import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <Link className="sidebar-bar" to="/">
          <HomeIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Home</span>
        </Link>
        <Link className="sidebar-bar" to="/feed/explore">
          <ExploreIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Explore</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <Link className="sidebar-bar" to="/feed/library">
          <VideoLibraryIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Library</span>
        </Link>
        <Link className="sidebar-bar" to="/feed/history">
          <HistoryIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">History</span>
        </Link>
        <Link className="sidebar-bar" to="/feed/watch-later">
          <WatchLaterIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Watch later</span>
        </Link>
        <Link className="sidebar-bar" to="/feed/liked">
          <LikeIcon className="sidebar-bar-icon" />
          <span className="sidebar-bar-caption">Liked videos</span>
        </Link>
      </div>
    </aside>
  );
};
