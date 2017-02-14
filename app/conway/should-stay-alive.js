import aliveNeighbors from './alive-neighbors';

export default function (a) {
  const  aliveEh = aliveNeighbors(a);

  if (aliveEh < 1) {
    return false;
  }
}
