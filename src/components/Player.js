import { Divider } from "@material-ui/core";
import React from "react";

const Player = ({ item }) => {
  return (
    <div className="card p-3 border d-flex flex-column justify-content-between">
      <span>
        <h3>{item.Player_Name}</h3>
        <p className="font-weight-bold">
          {item.Country ? item.Country : "Unknown"}
        </p>
        <Divider className="my-3" />
        <p className="row">
          <b className="col-sm-4">Batting </b>
          <span className="col-sm-8">
            {item.Batting_Hand ? item.Batting_Hand : "Unknown"}
          </span>
        </p>
        <p className="row">
          <b className="col-sm-4">Bowling </b>
          <span className="col-sm-8">
            {item.Bowling_Skill ? item.Bowling_Skill : "Unknown"}
          </span>
        </p>
        <p className="row">
          <b className="col-sm-4">Born </b>
          <span className="col-sm-8">{item.DOB ? item.DOB : "Unknown"}</span>
        </p>
      </span>

      <button className="btn btn-primary">View More</button>
    </div>
  );
};

export default Player;
