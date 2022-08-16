import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { makeServer } from "./server";
import "./index.css";
import { VideoProvider } from "contexts/videoContex";
import { UserProvider } from "contexts/userContext";
import { HistoryProvider } from "contexts/historyContex";
import { LikeProvider } from "contexts/LikeContext";
import { WatchLaterProvider } from "contexts/watchaLaterContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <VideoProvider>
        <LikeProvider>
          <HistoryProvider>
            <WatchLaterProvider>
              <App />
            </WatchLaterProvider>
          </HistoryProvider>
        </LikeProvider>
      </VideoProvider>
    </UserProvider>
  </React.StrictMode>
);