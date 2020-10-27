import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Weather
          </Typography>
          <IconButton color="inherit">
            <RefreshIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
