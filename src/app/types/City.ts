import { Weather } from "./Weather";

export interface City {
  id: string;
  name?: string;
  currentWeather?: Weather;
  lastUpdate?: number;
}
