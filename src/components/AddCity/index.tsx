import React from "react";
import AddCityWindow from "./AddCityWindow";
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { addCityWindowOpen } from "app/actions/ui";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

interface Props {
  openAddCityWindow: typeof addCityWindowOpen;
}

const AddCity = ({ openAddCityWindow }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Fab
        onClick={openAddCityWindow}
        color="primary"
        aria-label="add"
        className={classes.button}
      >
        <AddIcon />
      </Fab>
      <AddCityWindow title="Choose city" />
    </>
  );
};

const mapDispatchToProps = {
  openAddCityWindow: addCityWindowOpen,
};

export default connect(undefined, mapDispatchToProps)(AddCity);
