import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import "./index.css";
import { VideoProvider } from "contexts/videoContex";
import { UserProvider } from "contexts/userContext";

// Call make Server
makeServer();
ReactDOM.render(
  <UserProvider>
    <VideoProvider>
      <App />
    </VideoProvider>
  </UserProvider>,
  document.getElementById("root")
);
