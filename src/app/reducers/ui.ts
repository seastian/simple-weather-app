import { API_START, API_END, TOGGLE_THEME } from "app/constants/actions";
import { AppAction } from "app/types/AppAction";
import { Theme } from "app/types/Theme";

interface UiState {
  requests: number;
  theme: Theme;
}

const initialState: UiState = {
  requests: 0,
  theme: "light",
};

export const uiReducer = (state = initialState, action: AppAction): UiState => {
  switch (action.type) {
    case API_START:
      return { ...state, requests: state.requests + 1 };

    case API_END:
      return { ...state, requests: state.requests - 1 };

    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    default:
      return state;
  }
};
