import { AppState } from "app/types/AppState";

const getCitiesSlice = (state: AppState) => state.cities;

export const getCitiesIds = (state: AppState) =>
  Object.keys(getCitiesSlice(state));

export const getCityById = (state: AppState, cityId: string) =>
  getCitiesSlice(state)[cityId];
