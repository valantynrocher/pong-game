import React, { useContext, useMemo } from "react";
import Dialog from "@material-ui/core/Dialog";
import { AppContext } from "../../context";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  Typography,
  Select,
} from "@material-ui/core";
import { useStyles } from "./styles";

const GameStarterDialogComponent = () => {
  const { state, setStatus, togglePlaying, setSpeed } = useContext(AppContext);

  const classes = useStyles();

  const events = useMemo(
    () => ({
      handleStart: () => {
        setStatus("PROGRESS");
        togglePlaying();
      },
      handleChangeLevel: (
        event: React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>
      ) => {
        setSpeed(Number(event.target.value));
      },
    }),
    [setSpeed, setStatus, togglePlaying]
  );
  return (
    <Dialog
      open={state.status === "START" && !state.isPlaying}
      onClose={events.handleStart}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
      disableBackdropClick
    >
      <DialogTitle id="responsive-dialog-title">Ready to play ?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormControl variant="outlined">
            <Typography variant="caption">What's your level ?</Typography>
            <Select
              native
              value={state.speed}
              onChange={events.handleChangeLevel}
              inputProps={{
                name: "level",
                id: "level-select",
              }}
            >
              <option value={400}>Easy</option>
              <option value={300}>Intermediate</option>
              <option value={200}>Pro</option>
            </Select>
          </FormControl>
        </DialogContentText>
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActionsRoot }}>
        <Button
          onClick={events.handleStart}
          variant="contained"
          color="secondary"
          size="large"
        >
          Start !
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameStarterDialogComponent;
