import { UI_REQUEST_END, UI_REQUEST_START } from "app/constants/actions";
import { AppAction } from "app/types/AppAction";

interface UiState {
  requests: number;
}

const initialState: UiState = {
  requests: 0,
};

export const uiReducer = (state = initialState, action: AppAction): UiState => {
  switch (action.type) {
    case UI_REQUEST_START:
      return { ...state, requests: state.requests + 1 };

    case UI_REQUEST_END:
      return { ...state, requests: state.requests - 1 };

    default:
      return state;
  }
};
