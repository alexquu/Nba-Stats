import React from "react";
import { Box } from "@mui/system";
import { useGlobalContext } from "../context";
import * as NBAIcons from "react-nba-logos";

const Playerbox = () => {
  const { player, teamLogo, setTeamLogo } = useGlobalContext();

  setTeamLogo(player[0].team.abbreviation);

  const renderLogo = (e) => {
    if (e === "ATL") {
      return <NBAIcons.ATL size={150} />;
    }
    if (e === "BKN") {
      return <NBAIcons.BKN size={150} />;
    }
    if (e === "BOS") {
      return <NBAIcons.BOS size={150} />;
    }
    if (e === "CHA") {
      return <NBAIcons.CHA size={150} />;
    }
    if (e === "CHI") {
      return <NBAIcons.CHI size={150} />;
    }
    if (e === "CLE") {
      return <NBAIcons.CLE size={150} />;
    }
    if (e === "DAL") {
      return <NBAIcons.DAL size={150} />;
    }
    if (e === "DEN") {
      return <NBAIcons.DEN size={150} />;
    }
    if (e === "DET") {
      return <NBAIcons.DET size={150} />;
    }
    if (e === "GSW") {
      return <NBAIcons.GSW size={150} />;
    }
    if (e === "HOU") {
      return <NBAIcons.HOU size={150} />;
    }
    if (e === "IND") {
      return <NBAIcons.IND size={150} />;
    }
    if (e === "LAC") {
      return <NBAIcons.LAC size={150} />;
    }
    if (e === "LAL") {
      return <NBAIcons.LAL size={150} />;
    }
    if (e === "MEM") {
      return <NBAIcons.MEM size={150} />;
    }
    if (e === "MIA") {
      return <NBAIcons.MIA size={150} />;
    }
    if (e === "MIL") {
      return <NBAIcons.MIL size={150} />;
    }
    if (e === "MIN") {
      return <NBAIcons.MIN size={150} />;
    }
    if (e === "NOP") {
      return <NBAIcons.NOP size={150} />;
    }
    if (e === "NYK") {
      return <NBAIcons.NYK size={150} />;
    }
    if (e === "OKC") {
      return <NBAIcons.OKC size={150} />;
    }
    if (e === "ORL") {
      return <NBAIcons.ORL size={150} />;
    }
    if (e === "PHI") {
      return <NBAIcons.PHI size={150} />;
    }
    if (e === "PHX") {
      return <NBAIcons.PHX size={150} />;
    }
    if (e === "POR") {
      return <NBAIcons.POR size={150} />;
    }
    if (e === "SAC") {
      return <NBAIcons.SAC size={150} />;
    }
    if (e === "SAS") {
      return <NBAIcons.SAS size={150} />;
    }
    if (e === "TOR") {
      return <NBAIcons.TOR size={150} />;
    }
    if (e === "UTA") {
      return <NBAIcons.UTA size={150} />;
    }
    if (e === "WAS") {
      return <NBAIcons.WAS size={150} />;
    }
  };

  return (
    <div>
      <Box className="player">
        <div className="logo">{renderLogo(teamLogo)}</div>
        {player[0].first_name}&nbsp;{player[0].last_name}
      </Box>
    </div>
  );
};

export default Playerbox;
