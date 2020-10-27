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
import { deleteCity } from "app/actions/cities";

const useStyles = makeStyles((theme) => ({
  current: {
    textAlign: "center",
    fontSize: "2em",
    marginBottom: theme.spacing(1),
  },
  center: {
    textAlign: "center",
  },
}));

interface Props {
  id: string;
  city: City;
  deleteCity: typeof deleteCity;
}

const CityCard = ({ city, deleteCity }: Props) => {
  const classes = useStyles();

  const handleDelete = () => deleteCity(city.id);

  return (
    <Card>
      <CardHeader
        title={city.name}
        action={
          <IconButton aria-label="delete-city" onClick={handleDelete}>
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
              {city.forecast?.slice(1, 6).map((f, i) => {
                const date = new Date(
                  +new Date() + (i + 1) * 24 * 60 * 60 * 1000
                );

                const day = date.toLocaleString("en-us", { weekday: "short" });
                return (
                  <Grid key={i} item>
                    <div className={classes.center}>{day}</div>
                    <div className={classes.center}>{f.temperature}</div>
                  </Grid>
                );
              })}
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

const mapDispatchToProps = {
  deleteCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
