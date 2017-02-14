export default function (a) {
  let aliveNeighbors = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === true) {
      aliveNeighbors += 1;
    }
  }

  return aliveNeighbors;
}
