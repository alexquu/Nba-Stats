import React, { useState } from "react";
import { useGlobalContext } from "../context";
import AppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";

const Navbar = () => {
  const { handleSubmit, playerName, setPlayerName } = useGlobalContext();

  const [isTitleOpen, setIsTitleOpen] = useState(true);
  const [isMinibarOpen, setIsMinibarOpen] = useState(false);

  const showMinibar = () => {
    setIsTitleOpen(false);
    setIsMinibarOpen(true);
  };

  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          backgroundColor: "rgb(25, 25, 25)",
          flexDirection: "row",
          justifyContent: "space-around",
          position: "sticky",
          padding: "0.5rem",
        }}
      >
        <section className={`${isTitleOpen ? "navbarTitle" : "hideTitle"}`}>
          NBA STATS
        </section>
        <form
          className={`${!isMinibarOpen ? "searchBar" : "miniBar"}`}
          onSubmit={handleSubmit}
        >
          <SearchIcon sx={{ fontSize: "2rem" }} />
          <InputBase
            type="text"
            id="playerInput"
            name="playerInput"
            placeholder="Search a player"
            sx={{ input: { color: "white" } }}
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </form>
        <Box className={`${!isMinibarOpen ? "menuIcon" : "hideTitle"}`}>
          <SearchIcon sx={{ fontSize: "larger" }} onClick={showMinibar} />
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
