import { HeaderLogo} from "assets/images";
import { AccountCircleSharpIcon, NotificationsNoneOutlinedIcon, SearchIcon, Menu } from "assets/muiIcons";
import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <Menu />
        <div className="brand-logo">
          <img src={HeaderLogo} alt="logo" />
        </div>
        <h1 className="brand-name">FabTube</h1>
      </div>

      <div className="search-box">
        <input className="search" type="text" placeholder="Search" />
        <SearchIcon className="search-logo" />
      </div>
      <div className="profile">
        <NotificationsNoneOutlinedIcon />
        <AccountCircleSharpIcon />
      </div>
    </header>
  );
};
