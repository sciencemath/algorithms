/**
 * Removing all occurences of val in nums (exclude)
 * NOTE: This is an in-place algorithm otherwise I would simply
 * use filter.
 * 
 * Modify original array, return length
 * 
 * Example:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,4,0,3]
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let j = 0
    nums.forEach((num, i) => {
        if (nums[i] !== val) {
            nums[j] = nums[i]
            j++
        }
    })
    return j
};