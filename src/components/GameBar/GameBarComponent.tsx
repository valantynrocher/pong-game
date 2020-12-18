import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useMemo } from "react";
import { AppContext } from "../../context";
import { useStyles } from "./styles";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import SettingsIcon from "@material-ui/icons/Settings";

const GameBarComponent = () => {
  const { state, togglePlaying } = useContext(AppContext);

  const classes = useStyles();

  const events = useMemo(() => {
    return {
      handleStopClick: () => {
        togglePlaying();
      },
    };
  }, [togglePlaying]);

  return (
    <div className={classes.root}>
      <div className={classes.flexCenter}>
        <div className={classes.points}>
          <Typography color="primary" variant="caption">
            score :
          </Typography>
          <Typography color="primary" variant="h4">
            {state.points}
          </Typography>
        </div>
        <IconButton
          classes={{ root: classes.buttonRoot }}
          onClick={events.handleStopClick}
          color="primary"
        >
          {state.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton classes={{ root: classes.buttonRoot }} color="primary">
          <StopIcon />
        </IconButton>
      </div>
      <div className={classes.flexCenter}>
        <IconButton classes={{ root: classes.buttonRoot }} color="primary">
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default GameBarComponent;
