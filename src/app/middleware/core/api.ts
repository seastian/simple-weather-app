import { API_START, API_PENDING, API_DONE } from "app/constants/actions";
import { Middleware } from "../Middleware";
import { API_URL } from "app/constants/urls";
import { AppAction } from "app/types/AppAction";
import { makeError } from "app/actions/api";

export const apiMdl: Middleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === API_START) {
    const { method, data, url } = action.payload;
    const payload = action.payload;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data) || undefined,
    };

    if (payload.pending.type !== API_PENDING) {
      dispatch({ type: API_PENDING });
    }

    dispatch(payload.pending);
    fetch(encodeURI(API_URL + url), options)
      .then((response) => response.json())
      .then((data) => {
        payload.success.payload.data = data;
        dispatch(payload.success as AppAction);
      })
      .catch((err) => {
        dispatch(makeError(err));
      });
  }
};
