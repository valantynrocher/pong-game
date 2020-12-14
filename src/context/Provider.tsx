import React, { useReducer } from "react";
import {
  INITIAL_STATE,
  ContextState,
  ActionTypes,
  AppContext,
  DirectionType,
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

  return (
    <AppContext.Provider
      value={{
        state,
        setDotSize,
        setSpeed,
        setDirection,
        setPoints,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default Provider;
