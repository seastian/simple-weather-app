import { fetchWeatherMdl } from "./app/fetchWeather";
import { apiMdl } from "./core/api";
import { multiMdl } from "./core/multi";

export const middleware = [multiMdl, apiMdl, fetchWeatherMdl];
