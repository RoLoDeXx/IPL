import React, { useState } from "react";
import stash from "../data.json";
import { makeStyles } from "@material-ui/core/styles";
import PlayerCard from "./Player";
import FilterBar from "./FilterBar";
import { Pagination } from "@material-ui/lab";
import { ButtonGroup, Button } from "@material-ui/core";

const Main = () => {
  const [playerPerPage, setplayerPerPage] = useState(50);
  const [pageNumber, setPageNumber] = useState(1);

  const renderPlayers = stash.db.player
    .slice((pageNumber - 1) * playerPerPage, pageNumber * playerPerPage)
    .map((item) => {
      return <PlayerCard item={item} key={item.Player_Name} />;
    });

  const useStyles = makeStyles(() => ({
    wAuto: {
      width: "fit-content",
    },
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
      <FilterBar />
      <div className="mt-3">
        <div className="d-block d-md-flex align-items-center justify-content-between">
          <small>
            Showing <span className="text-primary">{playerPerPage} </span>
            results out of {stash.db.player.length}
          </small>
          <div className="my-2">
            <small>Players per page </small>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                className={
                  playerPerPage === 10 ? "bg-primary text-white" : null
                }
                onClick={() => setplayerPerPage(10)}
              >
                10
              </Button>
              <Button
                className={
                  playerPerPage === 50 ? "bg-primary text-white" : null
                }
                onClick={() => setplayerPerPage(50)}
              >
                50
              </Button>
              <Button
                className={
                  playerPerPage === 100 ? "bg-primary text-white" : null
                }
                onClick={() => setplayerPerPage(100)}
              >
                100
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <div className={`${classes.grid} mt-3`}>{renderPlayers}</div>
      </div>

      <Pagination
        className={`${classes.wAuto} my-5 mx-auto`}
        count={Math.ceil(stash.db.player.length / playerPerPage)}
        page={pageNumber}
        onChange={(event, value) => setPageNumber(value)}
      />
    </div>
  );
};

export default Main;
