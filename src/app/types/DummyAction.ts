const DUMMY_ACTION = "DUMMY_ACTION";

export interface DummyAction {
  type: typeof DUMMY_ACTION;
}

export const makeDummyAction = (): DummyAction => ({
  type: DUMMY_ACTION,
});
