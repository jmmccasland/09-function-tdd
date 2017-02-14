import aliveNeighbors from './alive-neighbors';

export default function (a) {
  const  reviveEh = aliveNeighbors(a);

  if (reviveEh < 3 || reviveEh > 3) {
    return false;
  }

  if (reviveEh === 3) {
    return true;
  }
}
