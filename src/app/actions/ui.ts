import {
  ADD_CITY_WINDOW_CLOSE,
  ADD_CITY_WINDOW_OPEN,
  TOGGLE_THEME,
} from "app/constants/actions";

interface ToggleTheme {
  type: typeof TOGGLE_THEME;
}

export const toggleTheme = (): ToggleTheme => ({
  type: TOGGLE_THEME,
});

interface AddCityWindowOpen {
  type: typeof ADD_CITY_WINDOW_OPEN;
}

export const addCityWindowOpen = (): AddCityWindowOpen => ({
  type: ADD_CITY_WINDOW_OPEN,
});

interface AddCityWindowClose {
  type: typeof ADD_CITY_WINDOW_CLOSE;
}

export const addCityWindowClose = (): AddCityWindowClose => ({
  type: ADD_CITY_WINDOW_CLOSE,
});

export type UiActions = ToggleTheme | AddCityWindowOpen | AddCityWindowClose;
