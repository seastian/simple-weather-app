import { API_START } from "app/constants/actions";
import { Middleware } from "../Middleware";
import { API_URL } from "app/constants/urls";
import { AppAction } from "app/types/AppAction";
import { apiEnd } from "app/actions/api";

export const apiMdl: Middleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === API_START) {
    const { method, pending, success, error, data, url } = action.payload;
    const payload = action.payload;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data) || undefined,
    };

    dispatch(pending);
    fetch(
      encodeURI(
        API_URL + url + "&units=metric&appid=5d2145b1e3153ce2a87bbad571a98ba4"
      ),
      options
    )
      .then((response) => response.json())
      .then((data) => {
        payload.success.payload.data = data;
        dispatch(success as AppAction);
      })
      .catch((err) => {
        error.payload.data = err;
        dispatch(error as AppAction);
      })
      .then(() => dispatch(apiEnd()));
  }
};
