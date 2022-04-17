import React from "react";
import { SuggestionVideoCard } from "components";
import "./videoDetails.css";
import { Chip, Stack } from "@mui/material";
import { useVideos } from "contexts/videoContex";
export const VideoDetailsPage = () => {
  const {
    videoState: { videos, loading },
  } = useVideos();
  return (
    <main className="container video-details-container">
      <div className="video-details-left-pane">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/C16EMv_J02w?modestbranding=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Namaste JavaScript Ep.15</h2>
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
