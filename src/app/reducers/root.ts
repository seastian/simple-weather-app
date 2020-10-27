import { combineReducers } from "redux";
import { citiesReducer } from "./cities";
import { toasterReducer } from "./toaster";
import { uiReducer } from "./ui";

export const rootReducer = combineReducers({
  cities: citiesReducer,
  ui: uiReducer,
  toasts: toasterReducer,
});
