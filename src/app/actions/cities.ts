import {
  ADD_CITY,
  SET_CURRENT_WEATHER,
  FETCH_CURRENT_WEATHER,
  FETCH_CURRENT_WEATHER_PENDING,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_ERROR,
  DELETE_CITY,
  UPDATE_ALL_WEATHER,
} from "app/constants/actions";
import { City } from "app/types/City";
import { OpOneCall } from "app/types/op/types";
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
    forecast: Weather[];
  };
}

export const setCityCurrentWeather = (
  cityId: string,
  weather: Weather,
  forecast: Weather[]
): SetCityCurrentWeather => ({
  type: SET_CURRENT_WEATHER,
  payload: {
    cityId,
    weather,
    forecast,
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
    data?: OpOneCall;
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

interface DeleteCity {
  type: typeof DELETE_CITY;
  cityId: string;
}

export const deleteCity = (cityId: string): DeleteCity => ({
  type: DELETE_CITY,
  cityId,
});

interface UpdateAllWeather {
  type: typeof UPDATE_ALL_WEATHER;
}

export const updateAllWeather = (): UpdateAllWeather => ({
  type: UPDATE_ALL_WEATHER,
});

export type CityActions =
  | AddCity
  | SetCityCurrentWeather
  | FetchCityCurrentWeather
  | FetchCityCurrentWeatherPending
  | FetchCityCurrentWeatherSuccess
  | FetchCityCurrentWeatherError
  | UpdateAllWeather
  | DeleteCity;
