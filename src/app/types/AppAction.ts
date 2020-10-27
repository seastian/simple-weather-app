import * as constants from "app/constants/actions";
import { Multi } from "app/actions/multi";
import { ApiActions } from "app/actions/api";
import { CityActions } from "app/actions/cities";
import { DummyAction } from "app/types/DummyAction";
import { InitApp } from "app/actions/initApp";
import { ToastActions } from "app/actions/toasts";
import { UiActions } from "app/actions/ui";

export type ActionConstant = keyof typeof constants;

export type AppAction =
  | DummyAction
  | Multi
  | CityActions
  | ToastActions
  | ApiActions
  | UiActions
  | InitApp;
