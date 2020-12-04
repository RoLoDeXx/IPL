import React, { useState } from "react";
import { AppBar, Toolbar, Button, Typography, Slider } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Chips from "./Chips";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const valuetext = (value) => {
  return `${value} years`;
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterBar = () => {
  const [value, setValue] = useState([18, 50]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar
        position="static"
        className="bg-white text-dark border-rounded shadow-none border"
      >
        <Toolbar>
          <div className="w-100 d-flex align-items-center justify-content-between">
            <div className="d-none d-lg-block">
              <Typography id="discrete-slider" className="mx-5 px-5 mt-3">
                Age
              </Typography>
              <Slider
                value={value}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={handleChange}
                min={18}
                max={50}
              />
            </div>
            <Button variant="outlined" color="primary">
              Bowling <ArrowDropDownIcon />
            </Button>
            <Button variant="outlined" color="primary">
              Batting <ArrowDropDownIcon />
            </Button>
            <Button variant="outlined" color="primary">
              Nationality <ArrowDropDownIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              All filters
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>All filters come here lorem ipsum</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
      <Chips />
    </div>
  );
};

export default FilterBar;
