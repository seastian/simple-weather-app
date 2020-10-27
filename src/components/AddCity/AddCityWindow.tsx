import React, { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  AppBar,
  makeStyles,
  Slide,
  Toolbar,
  useMediaQuery,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  //@ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddCityWindow: FC<Props> = ({
  title,
  open,
  onClose,
  children,
}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 769px)");

  return (
    <Dialog
      open={open}
      fullScreen={isMobile}
      fullWidth={true}
      onClose={onClose}
      TransitionComponent={Transition as any}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
