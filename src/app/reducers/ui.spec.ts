import { uiReducer } from "./ui";
import { makeDummyAction } from "app/types/DummyAction";
import { uiRequestStart, uiRequestEnd } from "app/actions/ui";

it("should start at 0", () => {
  const initialState = uiReducer(undefined, makeDummyAction());
  const requests = initialState.requests;

  expect(requests).toBe(0);
});

it("should increment requests", () => {
  let state = uiReducer(undefined, makeDummyAction());
  const requests = state.requests;

  state = uiReducer(state, uiRequestStart());
  state = uiReducer(state, uiRequestStart());

  expect(state.requests).toBe(requests + 2);
});

it("should increment and decrement requests", () => {
  let state = uiReducer(undefined, makeDummyAction());
  const requests = state.requests;

  state = uiReducer(state, uiRequestStart());
  state = uiReducer(state, uiRequestStart());
  state = uiReducer(state, uiRequestEnd());
  state = uiReducer(state, uiRequestEnd());
  state = uiReducer(state, uiRequestStart());

  expect(state.requests).toBe(requests + 1);
});
