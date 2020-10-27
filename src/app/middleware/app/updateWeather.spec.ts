import { updateAllWeather } from "app/actions/cities";
import { MULTI } from "app/constants/actions";
import { rootReducer } from "app/reducers/root";
import { AppAction } from "app/types/AppAction";
import { updateWeatherMdl } from "./updateWeather";

it("should dispatch multi", () => {
  const dispatch = jest.fn();
  const getState = jest.fn(() => rootReducer(undefined, {} as AppAction));
  const next = jest.fn();

  const mdl = updateWeatherMdl({ dispatch, getState })(next);

  mdl(updateAllWeather());
  expect(dispatch.mock.calls[0][0].type).toBe(MULTI);
});
