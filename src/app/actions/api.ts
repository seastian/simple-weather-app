import {
  API_START,
  API_PENDING,
  API_ERROR,
  API_DONE,
} from "app/constants/actions";
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

export interface ApiPending {
  type: typeof API_PENDING;
}

export interface ApiDone {
  type: typeof API_DONE;
  payload: {
    data: any;
  };
}

export interface ApiError {
  type: typeof API_ERROR;
  error: string;
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

export const makeError: (err: string) => ApiError = (err) => ({
  type: API_ERROR,
  error: err,
});

export type ApiActions = ApiStart | ApiPending | ApiError;
