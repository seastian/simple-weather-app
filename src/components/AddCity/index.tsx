import React, { useState } from "react";
import { AddCityWindow } from "./AddCityWindow";
import Body from "./Body";
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "absolute",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

export const AddCity = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="add"
        className={classes.button}
      >
        <AddIcon />
      </Fab>
      <AddCityWindow title="Choose city" open={open} onClose={handleClose}>
        <Body />
      </AddCityWindow>
    </>
  );
};
