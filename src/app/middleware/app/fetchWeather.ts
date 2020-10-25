import { ADD_CITY, FETCH_CITY_SUCCESS } from "app/constants/actions";
import { Middleware } from "../Middleware";
import { api } from "app/actions/api";
import {
  setCity,
  fetchCityPending,
  fetchCitySuccess,
  fetchCityError,
} from "app/actions/cities";
import { City } from "app/types/City";

export const fetchWeatherMdl: Middleware = ({ dispatch }) => (next) => (
  action
) => {
  next(action);

  if (action.type === ADD_CITY) {
    const id = action.id;
    const pending = fetchCityPending(id);
    const success = fetchCitySuccess(id);
    const error = fetchCityError(id);

    dispatch(api.get(`/weather?q=${id}`, pending, success, error));
  }

  if (action.type === FETCH_CITY_SUCCESS) {
    const city: City = {
      id: action.id,
      name: action.payload.data?.name,
    };
    dispatch(setCity(city));
  }
};
