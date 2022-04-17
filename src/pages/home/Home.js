import { Chips, Sidebar, VideoCard, Loader } from "components";
import { useVideos } from "contexts/videoContex";
import React from "react";
import "./home.css";
export const Home = () => {
  const {
    videoState: { videos, loading },
  } = useVideos();

  return (
    <>
      <main className="home-container">
        <Sidebar />

        <div className="home-content">
          <Chips />
          <div className="video-card-container">
            {loading ? (
              <Loader />
            ) : (
              <>
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
                    <VideoCard
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
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
