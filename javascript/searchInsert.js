/**
 * I remember doing this via recursion a while ago
 * The array here is always in order and this HAS to be an
 * O(log n) runtime complexity.
 * 
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsertRecursion = (nums, target) => {
  let mid = Math.floor(nums.length / 2)

    if (nums.length === 1) {
      if (nums[mid] === target) {
        return mid
      }
      return target < nums[mid] ? 0 : 1
    }

  if (nums[mid] === target) return mid

  let leftArray = nums.slice(0, mid)
  let rightArray = nums.slice(mid, nums.length)
  
  if (nums[mid] < target) {
      const rightIndex = searchInsert(rightArray, target)
      return mid + rightIndex;
  }
  if (nums[mid] > target) {
     return searchInsert(leftArray, target)
  }
};

// console.log(searchInsert([1,3], 3)) // 1
// console.log(searchInsert([1,3,5,6], 2)) // 1
// console.log(searchInsert([1,3,5], 4)) // 2
/*
* 
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
const searchInsertWhile = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return left;    
};