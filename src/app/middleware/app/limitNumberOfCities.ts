import { createToast } from "app/actions/toasts";
import { ADD_CITY } from "app/constants/actions";
import { getCitiesIds } from "app/selectors/cities";
import { Middleware } from "../Middleware";

export const limitNumberOfCitiesMdl: Middleware = ({ dispatch, getState }) => (
  next
) => (action) => {
  const maxNumberOfCities = 6;

  if (action.type === ADD_CITY) {
    const numberOfCities = getCitiesIds(getState()).length;
    if (numberOfCities === maxNumberOfCities) {
      dispatch(createToast("Only 6 cities allowed"));
      return undefined;
    }
  }

  next(action);
};
