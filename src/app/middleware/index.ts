import { fetchWeatherMdl } from "./app/fetchWeather";
import { apiMdl } from "./core/api";
import { multiMdl } from "./core/multi";
import { updateWeatherMdl } from "./app/updateWeather";
import { initAppMdl } from "./app/initApp";
import { limitNumberOfCitiesMdl } from "./app/limitNumberOfCities";
import { persistanceMdl } from "./app/persistance";
import { errorLoggerMdl } from "./core/errorLogger";

export const middleware = [
  errorLoggerMdl,
  multiMdl,
  apiMdl,
  initAppMdl,
  limitNumberOfCitiesMdl,
  persistanceMdl,
  fetchWeatherMdl,
  updateWeatherMdl,
];
