import { CREATE_TOAST, DELETE_LAST_TOAST } from "app/constants/actions";
import { AppAction } from "app/types/AppAction";
import { Toast } from "app/types/Toast";

type ToasterState = Toast[];

const initialState: ToasterState = [] as Toast[];

export const toasterReducer = (
  state = initialState,
  action: AppAction
): ToasterState => {
  switch (action.type) {
    case CREATE_TOAST: {
      const toast = action.toast;
      const lastMessage = state[state.length - 1]?.message;
      if (lastMessage === toast.message) {
        return state;
      }
      return [...state, toast];
    }

    case DELETE_LAST_TOAST:
      return state.slice(1);

    default:
      return state;
  }
};
