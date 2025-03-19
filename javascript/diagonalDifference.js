/**
 * Takes the sum of the difference of both diagonals of a nxm matrix
 * top left -> bottom right | top right -> bottom left
 * eg: [[11 2 4], [4 5 6], [10 8 -12]]
 *
 * @param {[[]]} arr
 * @returns
 */
function diagonalDifference(arr) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}
