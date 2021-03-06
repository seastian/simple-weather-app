import {
  ADD_CITY,
  FETCH_CURRENT_WEATHER,
  FETCH_CURRENT_WEATHER_ERROR,
  FETCH_CURRENT_WEATHER_SUCCESS,
} from "app/constants/actions";
import { Middleware } from "../Middleware";
import { api } from "app/actions/api";
import {
  fetchCityCurrentWeather,
  fetchCityCurrentWeatherPending,
  fetchCityCurrentWeatherSuccess,
  fetchCityCurrentWeatherError,
  setCityCurrentWeather,
} from "app/actions/cities";
import { Weather } from "app/types/Weather";
import { getCityById } from "app/selectors/cities";
import { createToast } from "app/actions/toasts";

export const fetchWeatherMdl: Middleware = ({ dispatch, getState }) => (
  next
) => (action) => {
  next(action);

  if (action.type === ADD_CITY) {
    dispatch(fetchCityCurrentWeather(action.city.id));
  }

  if (action.type === FETCH_CURRENT_WEATHER) {
    const { cityId } = action;
    const pending = fetchCityCurrentWeatherPending(cityId);
    const success = fetchCityCurrentWeatherSuccess(cityId);
    const error = fetchCityCurrentWeatherError(cityId);

    const [lat, lon] = cityId.split(",");
    dispatch(
      api.get(
        `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts`,
        pending,
        success,
        error
      )
    );
  }

  if (action.type === FETCH_CURRENT_WEATHER_ERROR) {
    dispatch(createToast("Could not update weather"));
  }

  if (action.type === FETCH_CURRENT_WEATHER_SUCCESS) {
    const {
      cityId,
      payload: { data },
    } = action;
    const weather: Weather = { temperature: data!.current.temp };
    const forecast: Weather[] = data!.daily.map((f) => ({
      temperature: f.temp.day,
    }));

    const cityExists = getCityById(getState(), cityId);
    if (cityExists) {
      dispatch(setCityCurrentWeather(cityId, weather, forecast));
    }
  }
};
