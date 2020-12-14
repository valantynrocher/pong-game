import React, { useContext, useEffect, useMemo, useState } from "react";
import Food from "../Food";
import randomPosition from "../../functions/randomPosition";
import Snake from "../Snake";
import { useStyles } from "./styles";
import { AppContext, DirectionType, INITIAL_STATE } from "../../context";

const INITIAL_SNAKE_POSITION = [
  [0, 0],
  [4, 0],
];

const PlaygroundComponent = () => {
  const { state, setDirection, setSpeed, setPoints } = useContext(AppContext);

  const [food, setFood] = useState(randomPosition(state.dotSize));
  const [snakeDots, setSnakeDots] = useState<any[]>(INITIAL_SNAKE_POSITION);
  const [isStop, setIsStop] = useState(false);

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
    alert("PERDU !");
    setSnakeDots(INITIAL_SNAKE_POSITION);
    setSpeed(INITIAL_STATE.speed);
    setPoints(INITIAL_STATE.points);
    setDirection("RIGHT");
  };

  useEffect(() => {
    checkIfOut();
    checkIfEat();
    checkIfCollapsed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snakeDots]);

  useEffect(() => {
    if (!isStop) {
      const interval = setInterval(() => {
        moveSnake();
      }, state.speed);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.direction, isStop, snakeDots, state.speed]);

  const events = useMemo(() => {
    return {
      handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSpeed(Number(event.target.value));
      },
      handleStopClick: () => {
        setIsStop((isStop) => !isStop);
      },
      handleKeyDown: (e: KeyboardEvent) => {
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
      },
    };
  }, [setDirection, setSpeed]);

  useEffect(() => {
    window.onkeydown = events.handleKeyDown;
  }, [events.handleKeyDown]);

  return (
    <React.Fragment>
      <div>
        <button onClick={events.handleStopClick}>
          {isStop ? "Reprendre" : "Pause"}
        </button>
      </div>
      <div>
        <label htmlFor="level-choice">Niveau :</label>
        <select onChange={events.handleSelectChange} id="level-choice">
          <option value={500}>Facile</option>
          <option value={300}>Intermédiaire</option>
          <option value={100}>Pro</option>
        </select>
      </div>
      <div>Points: {state.points}</div>
      <div className={classes.root}>
        <Snake dots={snakeDots} />
        <Food position={food} />
      </div>
    </React.Fragment>
  );
};

export default PlaygroundComponent;
