import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteColor } from "@material-ui/core/styles/createPalette";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AppContext } from "./context";
import Provider from "./context/Provider";
import GameManager from "./GameManager";

const font = "'Ultra', serif";

const App = () => {
  const { state } = useContext(AppContext);

  const { primary, secondary, type } = state.theme;

  const defaultTheme = createMuiTheme({
    palette: {
      primary: primary,
      secondary: secondary,
      type: type,
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

  const theme = useRef(defaultTheme);

  useEffect(() => {
    theme.current = {
      ...theme.current,
      palette: {
        ...theme.current.palette,
        primary,
        secondary,
        type,
      },
    };
    console.log({ newTheme: theme.current.palette.type });
  }, [defaultTheme, primary, secondary, type]);

  return (
    <Provider>
      <GameManager theme={theme.current} />
    </Provider>
  );
};

export default App;
