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
import { connect } from "react-redux";
import { getIsLoading } from "app/selectors/ui";
import { AppState } from "app/types/AppState";
import { updateAllWeather } from "app/actions/cities";

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
}

const Header = ({ isLoading, updateAllWeather }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Weather
          </Typography>
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

const mapDispatchToProps = { updateAllWeather };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
