import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface StyleProps {
  dotSize: number;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: (props: StyleProps) => ({
      position: "absolute",
      width: `${props.dotSize}%`,
      height: `${props.dotSize}%`,
      backgroundColor: theme.palette.error.main,
      borderRadius: "50%",
      border: "1px solid #fff",
      zIndex: 1,
    }),
  })
);
