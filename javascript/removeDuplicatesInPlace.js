/**
 * Note this confused me this is suppost to modify the array in-place,
 * but all the assertion wants is the length of the unique array.
 * Only if the elements are in order.
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return ++i;
};
