import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface StyleProps {
  dotSize: number;
  color: string;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: (props: StyleProps) => ({
      position: "absolute",
      width: `${props.dotSize}%`,
      height: `${props.dotSize}%`,
      backgroundColor: props.color,
      borderRadius: "50%",
      zIndex: 1,
    }),
  })
);
