import React from "react";
import stash from "../data.json";
import { makeStyles } from "@material-ui/core/styles";
import PlayerCard from "./Player";
const renderPlayers = stash.db.player.map((item) => {
  return <PlayerCard item={item} key={item.Player_Name} />;
});

const Main = () => {
  const useStyles = makeStyles(() => ({
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "1rem",
    },
    "@media (max-width: 992px)": {
      grid: {
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "2rem",
      },
    },
    "@media (max-width: 600px)": {
      grid: {
        gridTemplateColumns: "repeat(1,1fr)",
        gap: "2rem",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className="mt-5">
      <div className={classes.grid}>{renderPlayers}</div>
    </div>
  );
};

export default Main;
