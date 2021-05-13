import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import BackdropComponent from "./components/Backdrop/BackdropComponent";
import GameBar from "./components/GameBar";
import GameOverDialog from "./components/GameOverDialog";
import GameStarterDialog from "./components/GameStarterDialog";
import Playground from "./components/Playground";

interface GameManagerProps {
  theme: Theme;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: theme.palette.grey[300],
      height: "100vh",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "100vh",
    },
  })
);

const GameManager = (props: GameManagerProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <GameStarterDialog />
      <GameOverDialog />
      <div className={classes.main}>
        <Container
          className={classes.container}
          disableGutters
          fixed
          maxWidth="sm"
        >
          <GameBar />
          <Playground />
        </Container>
        <BackdropComponent />
      </div>
    </ThemeProvider>
  );
};

export default GameManager;
