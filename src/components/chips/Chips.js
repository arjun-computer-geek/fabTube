import React, { useRef } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './chips.css'

export const Chips = () => {
  const chipsContainer = useRef(null)
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const leftScroll =() => {
    chipsContainer.current.scrollLeft += 300;
  }
  const rightScroll =() => {
    chipsContainer.current.scrollLeft -= 300;
  }
  return (
    <div className="chips-bar">
    <button className="left-arrow" onClick={leftScroll}><ArrowBackIosIcon/></button>
    <Stack ref={chipsContainer} className="chips-container" direction="row" spacing={1}>
        
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      <Chip className="chips" label="Clickable" onClick={handleClick} />
      
    </Stack>
      <button className="right-arrow" onClick={rightScroll}><ArrowForwardIosIcon/></button>
    </div>
  );
};
