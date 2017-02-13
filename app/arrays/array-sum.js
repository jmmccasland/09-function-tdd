export default function (array) {
  const length = array.length;
  let sumValue = 0;

  for (let i = 0; i < length; i += 1) {
    sumValue += array[i];
  }

  return sumValue;
}
