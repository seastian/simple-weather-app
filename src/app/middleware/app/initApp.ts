import { addCity } from "app/actions/cities";
import { createToast } from "app/actions/toasts";
import { INIT_APP } from "app/constants/actions";
import { Middleware } from "../Middleware";

export const initAppMdl: Middleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === INIT_APP) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(addCity("Current", latitude, longitude));
      },
      () => {
        dispatch(createToast("Could not access current location"));
      }
    );
  }
};
