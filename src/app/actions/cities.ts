import {
  ADD_CITY,
  SET_CITY,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_PENDING,
  FETCH_CITY_ERROR,
} from "app/constants/actions";
import { City } from "app/types/City";
import { OpCurrentWeather } from "app/types/op/Current";

export interface AddCity {
  type: typeof ADD_CITY;
  id: string;
}

export const addCityById = (id: string): AddCity => ({
  type: ADD_CITY,
  id,
});

export interface SetCity {
  type: typeof SET_CITY;
  city: City;
}

export const setCity = (city: City): SetCity => ({
  type: SET_CITY,
  city,
});

interface FetchCityPending {
  type: typeof FETCH_CITY_PENDING;
  id: string;
}

export const fetchCityPending = (id: string): FetchCityPending => ({
  type: FETCH_CITY_PENDING,
  id,
});

interface FetchCitySuccess {
  type: typeof FETCH_CITY_SUCCESS;
  id: string;
  payload: {
    data?: OpCurrentWeather;
  };
}
export const fetchCitySuccess = (id: string): FetchCitySuccess => ({
  type: FETCH_CITY_SUCCESS,
  id,
  payload: {
    data: undefined,
  },
});

interface FetchCityError {
  type: typeof FETCH_CITY_ERROR;
  id: string;
  payload: {
    data: any;
  };
}

export const fetchCityError = (id: string): FetchCityError => ({
  type: FETCH_CITY_ERROR,
  id: id,
  payload: {
    data: undefined,
  },
});

export type CityActions =
  | AddCity
  | SetCity
  | FetchCitySuccess
  | FetchCityPending
  | FetchCityError;
