import {
  API_START,
  API_END,
  TOGGLE_THEME,
  ADD_CITY_WINDOW_OPEN,
  ADD_CITY_WINDOW_CLOSE,
} from "app/constants/actions";
import { AppAction } from "app/types/AppAction";
import { Theme } from "app/types/Theme";

interface UiState {
  requests: number;
  theme: Theme;
  isAddCityWindowOpen: boolean;
}

const initialState: UiState = {
  requests: 0,
  theme: "light",
  isAddCityWindowOpen: false,
};

export const uiReducer = (state = initialState, action: AppAction): UiState => {
  switch (action.type) {
    case API_START:
      return { ...state, requests: state.requests + 1 };

    case API_END:
      return { ...state, requests: state.requests - 1 };

    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case ADD_CITY_WINDOW_OPEN:
      return { ...state, isAddCityWindowOpen: true };

    case ADD_CITY_WINDOW_CLOSE:
      return { ...state, isAddCityWindowOpen: false };
    default:
      return state;
  }
};
