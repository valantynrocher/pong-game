const randomPosition = (dotSize: number) => {
  let min = 1;
  let max = 98;
  let x =
    Math.floor((Math.random() * (max - min + 1) + min) / dotSize) * dotSize;
  let y =
    Math.floor((Math.random() * (max - min + 1) + min) / dotSize) * dotSize;

  return [x, y];
};

export default randomPosition;
