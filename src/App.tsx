import React from "react";
import Playground from "./components/Playground";
import Provider from "./context/Provider";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GameBar from "./components/GameBar";
import { amber, teal } from "@material-ui/core/colors";
import BackdropComponent from "./components/Backdrop/BackdropComponent";
import GameStarterDialog from "./components/GameStarterDialog";
import GameOverDialog from "./components/GameOverDialog";

const font = "'Ultra', serif";

let defaultTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: teal[700],
    },
    secondary: amber,
  },
  typography: {
    fontSize: 14,
    fontFamily: font,
    h1: {
      textTransform: "uppercase",
    },
    h2: {
      textTransform: "uppercase",
    },
    h3: {
      textTransform: "uppercase",
    },
    h4: {
      textTransform: "uppercase",
    },
    h5: {
      textTransform: "uppercase",
    },
    h6: {
      textTransform: "uppercase",
    },
    subtitle1: {
      textTransform: "uppercase",
    },
    subtitle2: {
      textTransform: "uppercase",
    },
  },
});

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
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

const App = () => {
  const classes = useStyles();
  return (
    <Provider>
      <ThemeProvider theme={defaultTheme}>
        <GameStarterDialog />
        <GameOverDialog />
        <div className={classes.app}>
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
    </Provider>
  );
};

export default App;
