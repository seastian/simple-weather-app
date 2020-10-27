import { fetchCityCurrentWeather } from "app/actions/cities";
import { multi } from "app/actions/multi";
import { UPDATE_ALL_WEATHER } from "app/constants/actions";
import { getCitiesIds } from "app/selectors/cities";
import { Middleware } from "../Middleware";

export const updateWeatherMdl: Middleware = ({ dispatch, getState }) => (
  next
) => (action) => {
  next(action);

  if (action.type === UPDATE_ALL_WEATHER) {
    dispatch(
      multi(
        getCitiesIds(getState()).map((cityId) =>
          fetchCityCurrentWeather(cityId)
        )
      )
    );
  }
};
