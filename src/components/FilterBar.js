import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
const filterBar = () => {
  return (
    <div>
      <AppBar position="static" className="bg-light border-rounded">
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
};

export default filterBar;
