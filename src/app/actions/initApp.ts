import { INIT_APP } from "app/constants/actions";

export interface InitApp {
  type: typeof INIT_APP;
}

export const initApp = (): InitApp => ({
  type: INIT_APP,
});
