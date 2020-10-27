import { AppState } from "app/types/AppState";
import { Toast } from "app/types/Toast";

const getToastsSlice = (state: AppState) => state.toasts;

export const getToastMessage = (state: AppState): Toast | null => {
  const toasts = getToastsSlice(state);
  if (toasts.length) {
    return toasts[0];
  }
  return null;
};
