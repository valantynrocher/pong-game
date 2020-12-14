import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DirectionType } from "../../context";

interface StyleProps {
  dotSize: number;
  direction: DirectionType;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: (props: StyleProps) => ({
      position: "absolute",
      width: `${props.dotSize}%`,
      height: `${props.dotSize}%`,
      border: "1px solid #fff",
      zIndex: 2,
    }),
    body: {
      backgroundColor: theme.palette.secondary.main,
    },
    head: (props: StyleProps) => ({
      backgroundColor: theme.palette.primary.main,
      "&:before": {
        content: "''",
        position: "absolute",
        width: 5,
        height: 5,
        borderRadius: "50%",
        backgroundColor: "#fff",
        right:
          props.direction === "RIGHT" || props.direction === "DOWN"
            ? "15%"
            : "55%",
        top:
          props.direction === "RIGHT" || props.direction === "UP"
            ? "15%"
            : "55%",
      },
      "&:after": {
        content: "''",
        position: "absolute",
        width: 5,
        height: 5,
        borderRadius: "50%",
        backgroundColor: "#fff",
        right:
          props.direction === "RIGHT" || props.direction === "UP"
            ? "15%"
            : "55%",
        top:
          props.direction === "LEFT" || props.direction === "UP"
            ? "15%"
            : "55%",
      },
    }),
  })
);
