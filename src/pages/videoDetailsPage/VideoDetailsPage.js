import React from "react";
import { SuggestionVideoCard } from "components";
import "./videoDetails.css";
import { Chip, Stack } from "@mui/material";
import { useVideos } from "contexts/videoContex";
import { Outlet } from "react-router-dom";
export const VideoDetailsPage = () => {
  const {
    videoState: { videos, loading },
  } = useVideos();
  return (
    <main className="container video-details-container">
      <div className="video-details-left-pane">
        <Outlet />
      </div>
      <div className="video-details-right-pane">
        <Stack className="chips-container" direction="row" spacing={1}>
          <Chip className="chips" label="Clickable" />
          <Chip className="chips" label="Clickable" />
          <Chip className="chips" label="Clickable" />
          <Chip className="chips" label="Clickable" />
        </Stack>

        {videos.map(
          ({
            _id,
            thumbnail,
            title,
            chanel_pic,
            creator,
            views,
            createdAt,
          }) => (
            <SuggestionVideoCard
              key={_id}
              id={_id}
              thumbnail={thumbnail}
              title={title}
              ProfilePic={chanel_pic}
              chanel={creator}
              views={views}
              createdAt={createdAt}
            />
          )
        )}
      </div>
    </main>
  );
};
