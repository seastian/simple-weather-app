import { CREATE_TOAST, DELETE_LAST_TOAST } from "app/constants/actions";
import { Toast } from "app/types/Toast";

interface CreateToast {
  type: typeof CREATE_TOAST;
  toast: Toast;
}

export const createToast = (message: string, timeout = 3000): CreateToast => ({
  type: CREATE_TOAST,
  toast: { message, timeout },
});

interface DeleteLastToast {
  type: typeof DELETE_LAST_TOAST;
}

export const deleteLastToast = (): DeleteLastToast => ({
  type: DELETE_LAST_TOAST,
});

export type ToastActions = CreateToast | DeleteLastToast;
