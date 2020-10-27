import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import ToggleIcon from "@material-ui/icons/Brightness4";
import { connect } from "react-redux";
import { getIsLoading } from "app/selectors/ui";
import { AppState } from "app/types/AppState";
import { updateAllWeather } from "app/actions/cities";
import { toggleTheme } from "app/actions/ui";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

interface Props {
  isLoading: boolean;
  updateAllWeather: typeof updateAllWeather;
  toggleTheme: typeof toggleTheme;
}

const Header = ({ isLoading, updateAllWeather, toggleTheme }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Weather
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            <ToggleIcon />
          </IconButton>
          {isLoading ? (
            <CircularProgress color="secondary" />
          ) : (
            <IconButton color="inherit" onClick={updateAllWeather}>
              <RefreshIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { updateAllWeather, toggleTheme };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
