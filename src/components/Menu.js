import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useGlobalContext } from "../context";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(() => ({}));

const CustomizedMenus = () => {
  const {
    seasons,
    setSelectedSeason,
    fetchPlayerStats,
    playerStats,
    setIsStatFound,
  } = useGlobalContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (playerStats.length === 0) {
    setIsStatFound(false);
  }
  if (playerStats.length === 1) {
    setIsStatFound(true);
  }

  return (
    <section>
      <Button
        aria-controls={open}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "rgb(208, 209, 209);",
          border: "2px solid rgb(25, 25, 25);",
          color: "rgb(25, 25, 25);",
          fontSize: "1em",
          "&:hover": {
            backgroundColor: "#444444",
            color: "white",
            border: "2px solid rgb(72,71,71)",
          },
        }}
      >
        <p>Choose a season to display:</p>
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ height: "200px" }}
      >
        {seasons
          .map((el) => (
            <MenuItem
              sx={{ fontSize: "1em", width: ["16.5rem", "19.5rem"] }}
              key={el}
              onClick={() => {
                setSelectedSeason(el);
                handleClose();
                fetchPlayerStats(el);
              }}
            >
              Season {el} - {el + 1}
            </MenuItem>
          ))
          .reverse()}
      </StyledMenu>
    </section>
  );
};

export default CustomizedMenus;
