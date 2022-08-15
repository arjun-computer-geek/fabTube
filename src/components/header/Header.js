import { HeaderLogo } from "assets/images";
import { AccountCircleSharpIcon, NotificationsNoneOutlinedIcon, SearchIcon, Menu, LoginIcon } from "assets/muiIcons";
import { useUser } from "contexts/userContext";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const { userState: { user }, userState } = useUser()
  return (
    <header className="header">
      <div className="brand">
        <Menu />
        <Link to="/" className="brand-logo">
          <img src={HeaderLogo} alt="logo" />
        </Link>
        <Link to="/" ><h1 className="brand-name">FabTube</h1></Link>
      </div>

      <div className="search-box">
        <input className="search" type="text" placeholder="Search" />
        <SearchIcon className="search-logo" />
      </div>
      <div className="profile">
        <NotificationsNoneOutlinedIcon />
        {user ?
          <Link to='/profile'>
            <AccountCircleSharpIcon />
          </Link>
          :
          <Link to='/login'>
            <LoginIcon />
          </Link>}

      </div>
    </header>
  );
};
