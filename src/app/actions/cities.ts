import {
  ADD_CITY,
  SET_CURRENT_WEATHER,
  FETCH_CURRENT_WEATHER,
  FETCH_CURRENT_WEATHER_PENDING,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_ERROR,
} from "app/constants/actions";
import { City } from "app/types/City";
import { OpCurrentWeather } from "app/types/op/Current";
import { Weather } from "app/types/Weather";

export interface AddCity {
  type: typeof ADD_CITY;
  city: City;
}

export const addCity = (name: string, lat: number, lng: number): AddCity => ({
  type: ADD_CITY,
  city: { id: `${lat},${lng}`, name, lat, lng },
});

export interface SetCityCurrentWeather {
  type: typeof SET_CURRENT_WEATHER;
  payload: {
    cityId: string;
    weather: Weather;
  };
}

export const setCityCurrentWeather = (
  cityId: string,
  weather: Weather
): SetCityCurrentWeather => ({
  type: SET_CURRENT_WEATHER,
  payload: {
    cityId,
    weather,
  },
});

interface FetchCityCurrentWeather {
  type: typeof FETCH_CURRENT_WEATHER;
  cityId: string;
}

export const fetchCityCurrentWeather = (
  cityId: string
): FetchCityCurrentWeather => ({
  type: FETCH_CURRENT_WEATHER,
  cityId,
});

interface FetchCityCurrentWeatherPending {
  type: typeof FETCH_CURRENT_WEATHER_PENDING;
  id: string;
}

export const fetchCityCurrentWeatherPending = (
  id: string
): FetchCityCurrentWeatherPending => ({
  type: FETCH_CURRENT_WEATHER_PENDING,
  id,
});

interface FetchCityCurrentWeatherSuccess {
  type: typeof FETCH_CURRENT_WEATHER_SUCCESS;
  cityId: string;
  payload: {
    data?: OpCurrentWeather;
  };
}
export const fetchCityCurrentWeatherSuccess = (
  cityId: string
): FetchCityCurrentWeatherSuccess => ({
  type: FETCH_CURRENT_WEATHER_SUCCESS,
  cityId,
  payload: {
    data: undefined,
  },
});

interface FetchCityCurrentWeatherError {
  type: typeof FETCH_CURRENT_WEATHER_ERROR;
  cityId: string;
  payload: {
    data: any;
  };
}

export const fetchCityCurrentWeatherError = (
  cityId: string
): FetchCityCurrentWeatherError => ({
  type: FETCH_CURRENT_WEATHER_ERROR,
  cityId,
  payload: {
    data: undefined,
  },
});

export type CityActions =
  | AddCity
  | SetCityCurrentWeather
  | FetchCityCurrentWeather
  | FetchCityCurrentWeatherPending
  | FetchCityCurrentWeatherSuccess
  | FetchCityCurrentWeatherError;
