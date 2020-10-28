import { Middleware } from "../Middleware";

export const errorLoggerMdl: Middleware = () => (next) => (action) => {
  try {
    next(action);
  } catch (err) {
    // TODO add logging service
    console.log(err);
  }
};
