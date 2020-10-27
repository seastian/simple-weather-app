import { API_END, API_START } from "app/constants/actions";
import { AppAction, ActionConstant } from "app/types/AppAction";

type method = "GET" | "POST";

export interface ActionWithDataPayload {
  type: ActionConstant;
  payload: {
    data?: any;
  };
}

export interface ApiStart {
  type: typeof API_START;
  payload: {
    url: string;
    method: method;
    data?: {};
    pending: AppAction;
    success: ActionWithDataPayload;
    error: ActionWithDataPayload;
  };
}

const get: (
  url: string,
  pending: AppAction,
  success: ActionWithDataPayload,
  error: ActionWithDataPayload
) => ApiStart = (url, pending, success, error) => ({
  type: API_START,
  payload: { url, method: "GET", pending, success, error },
});

export const api = {
  get,
};

export interface ApiEnd {
  type: typeof API_END;
}

export const apiEnd = (): ApiEnd => ({ type: API_END });

export type ApiActions = ApiStart | ApiEnd;
