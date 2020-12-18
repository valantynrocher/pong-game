import { createContext } from "react";

export type DirectionType = "RIGHT" | "LEFT" | "UP" | "DOWN";

export interface ActionTypes {
  type: "speed" | "dots" | "direction" | "points" | "play";
  payload?: { value?: number; direction?: DirectionType };
}

export interface ContextState {
  speed: number;
  dotSize: number;
  direction: DirectionType;
  points: number;
  isPlaying: boolean;
  snakePosition: number[][];
}

export interface ContextProps {
  state: ContextState;
  setDotSize: (value: number) => void;
  setSpeed: (value: number) => void;
  setDirection: (direction: DirectionType) => void;
  setPoints: (value: number) => void;
  togglePlaying: () => void;
}

export const INITIAL_STATE: ContextState = {
  dotSize: 4,
  speed: 300,
  direction: "RIGHT",
  points: 0,
  isPlaying: true,
  snakePosition: [
    [0, 0],
    [4, 0],
  ],
};

export const AppContext = createContext<ContextProps>({
  state: INITIAL_STATE,
} as any);
