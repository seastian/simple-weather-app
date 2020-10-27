import { API_URL } from "app/constants/urls";
import { rest } from "msw";
import currentWeather from "./resources/current.json";

export const handlers = [
  rest.get(`${API_URL}/weather`, (_, res, ctx) => {
    // options q=buenos%20aires&appid=5d2145b1e3153ce2a87bbad571a98ba4
    return res(ctx.delay(2000), ctx.json(currentWeather));
  }),
];
