import React, { useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const seasons = [];
  for (let i = 0; i < 43; i++) {
    seasons.push(i + 1979);
  }

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const [isPlayerFound, setIsPlayerFound] = useState(false);

  const [isStatFound, setIsStatFound] = useState(false);

  const [playerName, setPlayerName] = useState("");

  const [player, setPlayer] = useState([]);

  const [playerStats, setPlayerStats] = useState([]);

  const [teamLogo, setTeamLogo] = useState("");

  const [selectedSeason, setSelectedSeason] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlayerData();
    setIsPlayerFound(true);
    setPlayerName("");
  };

  const fetchPlayerData = () => {
    setIsLoading(true);
    axios
      .get(urlPlayers)
      .then((res) => {
        setIsLoading(false);
        setPlayer(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const fetchPlayerStats = (el) => {
    const urlTable = `https://www.balldontlie.io/api/v1/season_averages?season=${el}&player_ids[]=${player[0].id}`;

    setIsLoading(true);

    axios
      .get(urlTable)
      .then((res) => {
        setIsLoading(false);
        setPlayerStats(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  const urlPlayers = `https://www.balldontlie.io/api/v1/players?search=${playerName}`;

  return (
    <AppContext.Provider
      value={{
        fetchPlayerData,
        urlPlayers,
        isLoading,
        isError,
        setIsError,
        setIsLoading,
        handleSubmit,
        playerName,
        setPlayerName,
        player,
        setPlayer,
        seasons,
        isPlayerFound,
        teamLogo,
        setTeamLogo,
        selectedSeason,
        setSelectedSeason,
        playerStats,
        setPlayerStats,
        fetchPlayerStats,
        isStatFound,
        setIsStatFound,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
