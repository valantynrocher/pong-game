import React, { useContext, useMemo } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { AppContext } from "../../context";

const BackdropComponent = () => {
  const { state, togglePlaying } = useContext(AppContext);
  const classes = useStyles();

  const events = useMemo(() => {
    return {
      handleClose: () => {
        togglePlaying();
      },
    };
  }, [togglePlaying]);

  return (
    <Backdrop
      className={classes.backdrop}
      open={!state.isPlaying && state.status === "PROGRESS"}
      onClick={events.handleClose}
    >
      <Typography variant="h1" component="div">
        Go !
      </Typography>
      <Typography variant="caption" component="div">
        Press or click space to start
      </Typography>
    </Backdrop>
  );
};

export default BackdropComponent;
