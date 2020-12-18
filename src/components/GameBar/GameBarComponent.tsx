import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { AppContext } from "../../context";
import { useStyles } from "./styles";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsManager from "../SettingsManager";

const GameBarComponent = () => {
  const { state, togglePlaying, reset } = useContext(AppContext);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const getLevel = useCallback(() => {
    const speed = state.speed;
    if (speed <= 400 && speed >= 301) {
      return "Easy";
    } else if (speed <= 300 && speed >= 201) {
      return "Intermediate";
    } else if (speed <= 200 && speed >= 101) {
      return "Pro";
    } else if (speed <= 100) {
      return "the goat";
    }
    return "unknow";
  }, [state.speed]);

  const events = useMemo(() => {
    return {
      handlePause: () => {
        togglePlaying();
      },
      handleReset: () => {
        reset();
      },
      handleSettingsOpen: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        setAnchorEl(event.currentTarget);
        togglePlaying();
      },
      handleSettingsClose: () => {
        setAnchorEl(null);
        togglePlaying();
      },
    };
  }, [reset, togglePlaying]);

  return (
    <div className={classes.root}>
      <div className={classes.flexCenter}>
        <div className={classes.points}>
          <Typography color="primary" variant="caption">
            score :
          </Typography>
          <Typography color="primary" variant="h6">
            {state.points}
          </Typography>
        </div>
        <div className={classes.points}>
          <Typography color="primary" variant="caption">
            level :
          </Typography>
          <Typography color="primary" variant="h6">
            {getLevel()}
          </Typography>
        </div>
        <IconButton
          classes={{ root: classes.buttonRoot }}
          onClick={events.handlePause}
          color="primary"
        >
          {state.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton
          onClick={events.handleReset}
          classes={{ root: classes.buttonRoot }}
          color="primary"
        >
          <RotateLeftIcon />
        </IconButton>
      </div>
      <div className={classes.flexCenter}>
        <IconButton
          onClick={events.handleSettingsOpen}
          classes={{ root: classes.buttonRoot }}
          color="primary"
        >
          <SettingsIcon />
        </IconButton>
        <SettingsManager
          anchorEl={anchorEl}
          onClose={events.handleSettingsClose}
        />
      </div>
    </div>
  );
};

export default GameBarComponent;
