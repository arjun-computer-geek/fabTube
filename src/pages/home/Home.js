import { Chips, Sidebar, VideoCard } from "components";
import React from "react";
import "./home.css";
export const Home = () => {
  return (
    <main className="home-container">
      <Sidebar />
      <div className="home-content">
        <Chips />
        <div className="video-card-container">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </main>
  );
};
