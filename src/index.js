import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import "./index.css";
import { VideoProvider } from "contexts/videoContex";

// Call make Server
makeServer();
ReactDOM.render(
  <VideoProvider>
    <App />
  </VideoProvider>,
  document.getElementById("root")
);
