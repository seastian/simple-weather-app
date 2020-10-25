import { MULTI } from "app/constants/actions";
import { Middleware } from "../Middleware";

export const multiMdl: Middleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === MULTI) {
    action.actions.forEach((a) => dispatch(a));
  }
};
