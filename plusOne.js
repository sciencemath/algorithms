/**
 * Given an array of numbers, increase by 1 and return the array
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * 
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2] 
 * 
 * Input: digits = [9]
 * Output: [1,0]
 * 
 * Input: digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
 * Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let numFromArray = BigInt(digits.join(''))
  return String(++numFromArray).split('').map((num) => (+num))
};

/**
 * `plusOneIter` is more language agnostic
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOneIter = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] + 1 !== 10) {
          digits[i] += 1;
          return digits;
      }
      digits[i] = 0;
      if (i === 0) {
          digits.unshift(1);
          return digits;
      }
  }    
};