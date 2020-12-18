import { createContext } from "react";

export type DirectionType = "RIGHT" | "LEFT" | "UP" | "DOWN";

export type StatusType = "START" | "END" | "PROGRESS";

export interface ActionTypes {
  type: "speed" | "dots" | "direction" | "points" | "play" | "status" | "reset";
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
};

export const AppContext = createContext<ContextProps>({
  state: INITIAL_STATE,
} as any);
