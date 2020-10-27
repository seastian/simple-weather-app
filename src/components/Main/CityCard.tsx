import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { getCityById } from "app/selectors/cities";
import { AppState } from "app/types/AppState";
import { City } from "app/types/City";
import React from "react";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  current: {
    textAlign: "center",
    fontSize: "2em",
    marginBottom: theme.spacing(1),
  },
}));

interface Props {
  id: string;
  city: City;
}

const CityCard = ({ city }: Props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={city.name}
        action={
          <IconButton aria-label="delete-city">
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        {city.currentWeather ? (
          <div>
            <div className={classes.current}>
              {city.currentWeather?.temperature}
            </div>
            <Grid container spacing={2} justify="center">
              {city.forecast?.slice(1, 6).map((f, i) => (
                <Grid item>
                  <div>Today</div>
                  <div>{f.temperature}</div>
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "Loading"
        )}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state: AppState, { id }: { id: string }) => ({
  city: getCityById(state, id),
});

export default connect(mapStateToProps)(CityCard);
