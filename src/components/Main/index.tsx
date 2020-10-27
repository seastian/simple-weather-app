import { Box, Grid } from "@material-ui/core";
import { getCitiesIds } from "app/selectors/cities";
import { AppState } from "app/types/AppState";
import React from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";

interface Props {
  citiesIds: ReturnType<typeof getCitiesIds>;
}

export const Main = ({ citiesIds }: Props) => {
  return (
    <Box m={4}>
      <Grid container spacing={2}>
        {citiesIds.map((cityId) => (
          <Grid item key={cityId} xs={12} md={4}>
            <CityCard id={cityId} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: AppState) => ({
  citiesIds: getCitiesIds(state),
});

export default connect(mapStateToProps)(Main);
