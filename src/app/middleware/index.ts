import { fetchWeatherMdl } from "./app/fetchWeather";
import { apiMdl } from "./core/api";
import { multiMdl } from "./core/multi";
import { updateWeatherMdl } from "./app/updateWeather";
import { initAppMdl } from "./app/initApp";

export const middleware = [
  multiMdl,
  apiMdl,
  initAppMdl,
  fetchWeatherMdl,
  updateWeatherMdl,
];
