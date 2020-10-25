import { addCityById } from "app/actions/cities";
import { API_START } from "app/constants/actions";
import { AppAction } from "app/types/AppAction";
import { fetchWeatherMdl } from "./fetchWeather";

describe("fetchWeather middleware", () => {
  it("should call next action", () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const next = jest.fn();

    const mdl = fetchWeatherMdl({ dispatch, getState })(next);
    mdl({} as AppAction);

    expect(next.mock.calls.length).toBe(1);
  });

  it("should dispatch a fetching action", () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const next = jest.fn();

    const mdl = fetchWeatherMdl({ dispatch, getState })(next);

    mdl(addCityById("buenos aires"));

    expect(dispatch.mock.calls[0][0].type).toBe(API_START);
  });
});
