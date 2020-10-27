import * as constants from "app/constants/actions";
import { Multi } from "app/actions/multi";
import { ApiActions } from "app/actions/api";
import { CityActions } from "app/actions/cities";
import { DummyAction } from "app/types/DummyAction";
import { InitApp } from "app/actions/initApp";

export type ActionConstant = keyof typeof constants;

export type AppAction =
  | DummyAction
  | Multi
  | CityActions
  | ApiActions
  | InitApp;
