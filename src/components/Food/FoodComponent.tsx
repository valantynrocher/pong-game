import React, { useContext } from "react";
import { AppContext } from "../../context";
import { FoodProps } from "./props";
import { useStyles } from "./styles";

const FoodComponent = (props: FoodProps) => {
  const { position } = props;
  const { state } = useContext(AppContext);
  const classes = useStyles({ dotSize: state.dotSize });

  const style = {
    left: `${position[0]}%`,
    top: `${position[1]}%`,
  };

  return <div className={classes.root} style={style} />;
};

export default FoodComponent;
