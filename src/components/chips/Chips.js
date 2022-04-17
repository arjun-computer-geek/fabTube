import { ArrowBackIosIcon, ArrowForwardIosIcon } from "assets/muiIcons";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import React, { useRef } from "react";

import "./chips.css";
import { useVideos } from "contexts/videoContex";

export const Chips = () => {
  const chipsContainer = useRef(null);
  const {
    categoryState: { categories },
    filterByCategoryName
  } = useVideos();

 
  const leftScroll = () => {
    chipsContainer.current.scrollLeft -= 300;
  };
  const rightScroll = () => {
    chipsContainer.current.scrollLeft += 300;
  };
  return (
    <div className="chips-bar">
      <button className="left-arrow" onClick={leftScroll}>
        <ArrowBackIosIcon />
      </button>
      <Stack
        ref={chipsContainer}
        className="chips-container"
        direction="row"
        spacing={1}
      >
        {categories.map((category) => (
          <Chip key={category._id} className="chips" label={category.categoryName} onClick={() => filterByCategoryName(category.categoryName)} />
        ))}
      </Stack>
      <button className="right-arrow" onClick={rightScroll}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};
