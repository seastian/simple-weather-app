import { UI_REQUEST_END, UI_REQUEST_START } from "app/constants/actions";

interface UiRequestStart {
  type: typeof UI_REQUEST_START;
}

export const uiRequestStart = (): UiRequestStart => ({
  type: UI_REQUEST_START,
});

interface UiRequestEnd {
  type: typeof UI_REQUEST_END;
}

export const uiRequestEnd = (): UiRequestEnd => ({
  type: UI_REQUEST_END,
});

export type UiActions = UiRequestStart | UiRequestEnd;
