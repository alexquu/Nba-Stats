import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../context";
import CustomizedMenus from "../components//Menu";
import Playerbox from "../components/Playerbox";
import Table from "../components/Table";

const Mainpage = () => {
  const { isLoading, isError, fetchPlayerData, isPlayerFound } =
    useGlobalContext();

  useEffect(() => {
    fetchPlayerData();
  }, []);

  return (
    <main>
      {!isLoading && !isError ? (
        <>
          <Navbar />
          <section className="subTitleContainer">
            <h4 className="subtitle">
              Season averages for the player you want.
            </h4>
          </section>
          {!isPlayerFound ? (
            <h3 className="guide">
              To start using the app, <br /> search for a player <br /> in the
              bar above.
            </h3>
          ) : (
            <div className="infoContainer">
              <Playerbox />
              <CustomizedMenus />
              <Table />
            </div>
          )}
        </>
      ) : !isLoading && isError ? (
        <section className="loadErrScreen">
          <h4 className="error">Error...</h4>
        </section>
      ) : (
        <section className="loadErrScreen">
          <h4 className="load">Loading...</h4>
        </section>
      )}
    </main>
  );
};

export default Mainpage;
