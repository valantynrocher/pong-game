import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(2),
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
    },
    buttonRoot: {
      borderRadius: 8,
    },
    points: {
      marginRight: theme.spacing(2),
    },
  })
);
