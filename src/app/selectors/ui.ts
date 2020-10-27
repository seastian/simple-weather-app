import { AppState } from "app/types/AppState";

const getUiSlice = (state: AppState) => state.ui;

export const getIsLoading = (state: AppState) => getUiSlice(state).requests > 0;
