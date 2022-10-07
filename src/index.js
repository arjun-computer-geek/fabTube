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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LibraryProvier } from "contexts/LibraryContext";

// Call make Server
makeServer();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <VideoProvider>
        <LikeProvider>
          <HistoryProvider>
            <WatchLaterProvider>
              <LibraryProvier>
            <ThemeProvider theme={darkTheme}>
              <App />
              </ThemeProvider>
              </LibraryProvier>
            </WatchLaterProvider>
          </HistoryProvider>
        </LikeProvider>
      </VideoProvider>
    </UserProvider>
  </React.StrictMode>
);