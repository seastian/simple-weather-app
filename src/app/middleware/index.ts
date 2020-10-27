import { fetchWeatherMdl } from "./app/fetchWeather";
import { apiMdl } from "./core/api";
import { multiMdl } from "./core/multi";
import { updateWeatherMdl } from "./app/updateWeather";

export const middleware = [multiMdl, apiMdl, fetchWeatherMdl, updateWeatherMdl];
