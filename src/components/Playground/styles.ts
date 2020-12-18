import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: 600,
      height: 600,
      backgroundColor: theme.palette.grey[100],
    },
  })
);
