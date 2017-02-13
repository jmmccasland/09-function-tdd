export default function (array1, array2) {
  if (array1.length !=  array2.length) {
    return false;
  }

  if (array1[0] === array2[0] && array1[1] === array2[1]) {
    return true;
  }

  if (array1[0] != array2[0] || array1[1] != array2[1]) {
    return false;
  }
}
