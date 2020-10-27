import { Snackbar } from "@material-ui/core";
import { deleteLastToast } from "app/actions/toasts";
import { getToastMessage } from "app/selectors/toasts";
import { AppState } from "app/types/AppState";
import { Toast } from "app/types/Toast";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

interface Props {
  toast: Toast | null;
  deleteLastToast: typeof deleteLastToast;
}

const Toaster = ({ toast, deleteLastToast }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (toast !== null) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [toast]);

  return (
    <Snackbar
      message={toast?.message}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={toast?.timeout}
      onExited={() => deleteLastToast()}
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  toast: getToastMessage(state),
});

const mapDispatchToProps = {
  deleteLastToast,
};
export default connect(mapStateToProps, mapDispatchToProps)(Toaster);
