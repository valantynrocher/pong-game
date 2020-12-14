import React, { useContext } from "react";
import { AppContext } from "../../context";
import { SnakeProps } from "./props";
import { useStyles } from "./styles";
import clsx from "clsx";

const SnakeComponent = (props: SnakeProps) => {
  const { dots } = props;
  const { state } = useContext(AppContext);
  const classes = useStyles({
    dotSize: state.dotSize,
    direction: state.direction,
  });

  return (
    <React.Fragment>
      {dots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return (
          <div
            key={i}
            className={clsx(classes.root, classes.body, {
              [classes.head]: i === dots.length - 1,
            })}
            style={style}
          ></div>
        );
      })}
    </React.Fragment>
  );
};

export default SnakeComponent;
