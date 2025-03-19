/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const numArray = String(x).split('');
  const numArrayReverse = String(x).split('').reverse();
  for (let i = 0; i < numArray.length; i++) {
    if (numArrayReverse[i] !== numArray[i]) {
      return false;
    }
  }

  return true;
};
