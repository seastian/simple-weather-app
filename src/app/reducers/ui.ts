import { API_START, API_END } from "app/constants/actions";
import { AppAction } from "app/types/AppAction";

interface UiState {
  requests: number;
}

const initialState: UiState = {
  requests: 0,
};

export const uiReducer = (state = initialState, action: AppAction): UiState => {
  switch (action.type) {
    case API_START:
      return { ...state, requests: state.requests + 1 };

    case API_END:
      return { ...state, requests: state.requests - 1 };

    default:
      return state;
  }
};
