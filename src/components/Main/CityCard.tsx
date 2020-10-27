import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import { getCityById } from "app/selectors/cities";
import { AppState } from "app/types/AppState";
import { City } from "app/types/City";
import React from "react";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  id: string;
  city: City;
}

const CityCard = ({ city }: Props) => {
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
      <CardContent>{city.currentWeather?.temperature || "Loading"}</CardContent>
    </Card>
  );
};

const mapStateToProps = (state: AppState, { id }: { id: string }) => ({
  city: getCityById(state, id),
});

export default connect(mapStateToProps)(CityCard);
