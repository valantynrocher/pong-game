import React, { useContext, useMemo } from "react";
import Dialog from "@material-ui/core/Dialog";
import { AppContext } from "../../context";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";

const GameOverDialogComponent = () => {
  const { state, reset } = useContext(AppContext);

  const classes = useStyles();

  const events = useMemo(
    () => ({
      handleTryAgain: () => {
        reset();
      },
    }),
    [reset]
  );
  return (
    <Dialog
      open={state.status === "END" && !state.isPlaying}
      onClose={events.handleTryAgain}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
      disableBackdropClick
    >
      <DialogTitle id="responsive-dialog-title">Yoo loose :(</DialogTitle>
      <DialogContent>
        <DialogContentText>You won {state.points} points !</DialogContentText>
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActionsRoot }}>
        <Button
          onClick={events.handleTryAgain}
          variant="contained"
          color="secondary"
          size="large"
        >
          Try again !
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameOverDialogComponent;
