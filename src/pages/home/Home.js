import { Chips, Sidebar } from "components";
import React from "react";
import './home.css'
export const Home = () => {
  return <main className="home-container">
      <Sidebar />
      <Chips />
  </main>;
};
