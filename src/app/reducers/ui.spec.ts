import { uiReducer } from "./ui";
import { makeDummyAction } from "app/types/DummyAction";
import { API_END, API_START } from "app/constants/actions";
import { ApiEnd, ApiStart } from "app/actions/api";

const apiStart = { type: API_START } as ApiStart;
const apiEnd = { type: API_END } as ApiEnd;

it("should start at 0", () => {
  const initialState = uiReducer(undefined, makeDummyAction());
  const requests = initialState.requests;

  expect(requests).toBe(0);
});

it("should increment requests", () => {
  let state = uiReducer(undefined, makeDummyAction());
  const requests = state.requests;

  state = uiReducer(state, apiStart);
  state = uiReducer(state, apiStart);

  expect(state.requests).toBe(requests + 2);
});

it("should increment and decrement requests", () => {
  let state = uiReducer(undefined, makeDummyAction());
  const requests = state.requests;

  state = uiReducer(state, apiStart);
  state = uiReducer(state, apiStart);
  state = uiReducer(state, apiEnd);
  state = uiReducer(state, apiEnd);
  state = uiReducer(state, apiStart);

  expect(state.requests).toBe(requests + 1);
});
