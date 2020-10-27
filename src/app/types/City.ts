import { Weather } from "./Weather";

export interface City {
  id: string;
  name: string;
  lat: number;
  lng: number;
  currentWeather?: Weather;
  forecast?: Weather[];
  lastUpdate?: number;
}
