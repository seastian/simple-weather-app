import { AppAction } from "app/types/AppAction";
import { AppState } from "app/types/AppState";

interface Store {
  dispatch: (action: AppAction) => void;
  getState: () => AppState;
}

export interface Middleware {
  (store: Store): Next;
}

interface Next {
  (next: (action: AppAction) => void): Action;
}

interface Action {
  (action: AppAction): void;
}
