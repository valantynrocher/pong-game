import { createContext } from "react";
import { amber, teal, red } from "@material-ui/core/colors";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

export type DirectionType = "RIGHT" | "LEFT" | "UP" | "DOWN";

export type StatusType = "START" | "END" | "PROGRESS";

export interface ThemeState {
  primary: PaletteColor;
  secondary: PaletteColor;
  food: string;
  type: "dark" | "light";
}

export interface ActionTypes {
  type:
    | "speed"
    | "dots"
    | "direction"
    | "points"
    | "play"
    | "status"
    | "reset"
    | "theme-type";
  payload?: {
    value?: number;
    direction?: DirectionType;
    status?: StatusType;
    state?: ContextState;
  };
}

export interface ContextState {
  status: StatusType;
  speed: number;
  dotSize: number;
  direction: DirectionType;
  points: number;
  isPlaying: boolean;
  snake: number[][];
  theme: ThemeState;
}

export interface ContextProps {
  state: ContextState;
  setDotSize: (value: number) => void;
  setSpeed: (value: number) => void;
  setDirection: (direction: DirectionType) => void;
  setPoints: (value: number) => void;
  togglePlaying: () => void;
  setStatus: (status: StatusType) => void;
  reset: () => void;
  toggleThemeType: () => void;
}

export const INITIAL_STATE: ContextState = {
  status: "START",
  dotSize: 4,
  speed: 300,
  direction: "RIGHT",
  points: 0,
  isPlaying: false,
  snake: [
    [0, 0],
    [4, 0],
  ],
  theme: {
    primary: {
      main: teal[500],
      dark: teal[700],
      light: teal[300],
      contrastText: "#fff",
    },
    secondary: {
      main: amber[500],
      dark: amber[700],
      light: amber[300],
      contrastText: "#fff",
    },
    food: red[500],
    type: "light",
  },
};

export const AppContext = createContext<ContextProps>({
  state: INITIAL_STATE,
} as any);
