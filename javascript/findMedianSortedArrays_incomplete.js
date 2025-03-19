/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * run time complexity should be O(log (m+n))
 * pointers and/or loops should not be part of the solution
 * and sort() would be O(m+n)
 * 
 * Since this is O(log(m+n)) we might have to use binary search
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const m = nums1.length
  const n = nums2.length
  const mid1 = Math.floor(m / 2) 
  const mid2 = Math.floor(n / 2)
  let median = 0

  /**
   * Both even take the end of first, start of second
   */
  // if (m % 2 === 0 && n % 2 === 0) {
  //     median = (nums1[m - 1] + nums2[0]) / 2
  // }

  // median = (Math.min(...nums1, ...nums2) + Math.max(...nums1, ...nums2)) / 2

  return median
};

// starting with basic edge case
console.log(findMedianSortedArrays([1,2], [3,4]))