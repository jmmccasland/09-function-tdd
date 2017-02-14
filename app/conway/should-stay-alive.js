import aliveNeighbors from './alive-neighbors';

export default function (a) {
  const  aliveEh = aliveNeighbors(a);

  if (aliveEh < 1) {
    return false;
  }

  if (aliveEh > 1 && aliveEh < 4) {
    return true;
  }

  if (aliveEh >= 4) {
    return false;
  }
}
