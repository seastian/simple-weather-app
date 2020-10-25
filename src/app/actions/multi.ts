import { MULTI } from "app/constants/actions";
import { AppAction } from "app/types/AppAction";

export interface Multi {
  type: typeof MULTI;
  actions: AppAction[];
}

export const multi = (actions: AppAction[]): Multi => ({
  type: MULTI,
  actions,
});
