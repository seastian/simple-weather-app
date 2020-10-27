import { TOGGLE_THEME } from "app/constants/actions";

interface ToggleTheme {
  type: typeof TOGGLE_THEME;
}

export const toggleTheme = (): ToggleTheme => ({
  type: TOGGLE_THEME,
});

export type UiActions = ToggleTheme;
