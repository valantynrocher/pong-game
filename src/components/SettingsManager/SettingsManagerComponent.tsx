import classes from "*.module.css";
import { Popover, Typography } from "@material-ui/core";
import React, { useContext, useMemo } from "react";
import { AppContext } from "../../context";
import { SettingsManagerProps } from "./props";
// import { useStyles } from "./styles";

const SettingsManagerComponent = (props: SettingsManagerProps) => {
  const { anchorEl, onClose } = props;
  const {} = useContext(AppContext);

  // const classes = useStyles();

  const events = useMemo(() => {
    return {};
  }, []);

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Typography>The content of the Popover.</Typography>
    </Popover>
  );
};

export default SettingsManagerComponent;
