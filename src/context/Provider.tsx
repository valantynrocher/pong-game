import React, { useReducer } from "react";
import {
  INITIAL_STATE,
  ContextState,
  ActionTypes,
  AppContext,
  DirectionType,
  StatusType,
} from ".";
import produce from "immer";

const reducer = (state: ContextState, action: ActionTypes) => {
  const nextState = produce(state, (draft) => {
    switch (action.type) {
      case "dots":
        draft.dotSize = action.payload!.value!;
        break;
      case "speed":
        draft.speed = action.payload!.value!;
        break;
      case "direction":
        draft.direction = action.payload!.direction!;
        break;
      case "points":
        draft.points = action.payload!.value!;
        break;
      case "play":
        draft.isPlaying = !draft.isPlaying;
        break;
      case "status":
        draft.status = action.payload!.status!;
        break;
      case "reset":
        draft.direction = INITIAL_STATE.direction!;
        draft.dotSize = INITIAL_STATE.dotSize;
        draft.isPlaying = INITIAL_STATE.isPlaying;
        draft.points = INITIAL_STATE.points;
        draft.speed = INITIAL_STATE.speed;
        draft.status = INITIAL_STATE.status;
        break;
      case "theme-type":
        draft.theme.type = draft.theme.type === "light" ? "dark" : "light";
        break;
      default:
        return;
    }
  });
  return nextState;
};

interface ProviderProps {
  children?: any;
}

const Provider = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const setDotSize = (value: number) =>
    dispatch({ type: "dots", payload: { value } });
  const setSpeed = (value: number) =>
    dispatch({ type: "speed", payload: { value } });
  const setDirection = (direction: DirectionType) =>
    dispatch({ type: "direction", payload: { direction } });
  const setPoints = (value: number) =>
    dispatch({ type: "points", payload: { value } });
  const togglePlaying = () => dispatch({ type: "play" });
  const setStatus = (status: StatusType) =>
    dispatch({ type: "status", payload: { status } });
  const reset = () => dispatch({ type: "reset", payload: {} });
  const toggleThemeType = () => dispatch({ type: "theme-type", payload: {} });

  return (
    <AppContext.Provider
      value={{
        state,
        setDotSize,
        setSpeed,
        setDirection,
        setPoints,
        togglePlaying,
        setStatus,
        reset,
        toggleThemeType,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default Provider;
