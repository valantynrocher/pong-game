import React, { useContext, useEffect, useMemo, useState } from "react";
import Food from "../Food";
import randomPosition from "../../functions/randomPosition";
import Snake from "../Snake";
import { useStyles } from "./styles";
import { AppContext, DirectionType } from "../../context";

const PlaygroundComponent = () => {
  const {
    state,
    setDirection,
    setSpeed,
    setPoints,
    togglePlaying,
    setStatus,
  } = useContext(AppContext);

  const [food, setFood] = useState(randomPosition(state.dotSize));
  const [snakeDots, setSnakeDots] = useState<any[]>(state.snake);
  useEffect(() => {
    state.status !== "PROGRESS" && setSnakeDots(state.snake);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status]);

  const classes = useStyles();

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head: number[] = dots[dots.length - 1];
    switch (state.direction) {
      case "RIGHT":
        head = [head[0] + state.dotSize, head[1]];
        break;
      case "LEFT":
        head = [head[0] - state.dotSize, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + state.dotSize];
        break;
      case "UP":
        head = [head[0], head[1] - state.dotSize];
        break;
    }

    dots.shift();
    setSnakeDots([...dots, head]);
  };

  const checkIfOut = () => {
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      gameOver();
    }
  };

  const checkIfEat = () => {
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] === food[0] && head[1] === food[1]) {
      increaseSnake();
      levelUp();
      setFood(randomPosition(state.dotSize));
    }
  };

  const checkIfCollapsed = () => {
    const snake = [...snakeDots];
    const head = snakeDots[snakeDots.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        gameOver();
      }
    });
  };

  const increaseSnake = () => {
    const nextSnake = [...snakeDots];
    nextSnake.unshift([]);
    setSnakeDots(nextSnake);
  };

  const levelUp = () => {
    setSpeed(state.speed - 10);
    setPoints(state.points + 50);
  };

  const gameOver = () => {
    togglePlaying();
    setStatus("END");
    setDirection("RIGHT");
  };

  useEffect(() => {
    checkIfOut();
    checkIfEat();
    checkIfCollapsed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snakeDots]);

  useEffect(() => {
    if (state.isPlaying) {
      const interval = setInterval(() => {
        state.status === "PROGRESS" && moveSnake();
      }, state.speed);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.direction, snakeDots, state.speed, state.isPlaying]);

  const events = useMemo(() => {
    return {
      handleKeyDown: (e: KeyboardEvent) => {
        if (state.isPlaying) {
          if (
            e.key === "ArrowUp" ||
            e.key === "ArrowDown" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight"
          ) {
            const direction = e.key
              .replace("Arrow", "")
              .toUpperCase() as DirectionType;
            setDirection(direction);
          }
          if (e.key === " ") {
            togglePlaying();
          }
        }
      },
    };
  }, [setDirection, state.isPlaying, togglePlaying]);

  useEffect(() => {
    window.onkeydown = events.handleKeyDown;
  }, [events.handleKeyDown]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Snake dots={snakeDots} />
        <Food position={food} />
      </div>
    </React.Fragment>
  );
};

export default PlaygroundComponent;
