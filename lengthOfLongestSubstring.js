/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let maxSubstring = {}
  let right = 0
  let left = 0
  let maxLength = 0
  
  while (right < s.length) {
      const char = s[right]

      if (maxSubstring[char] >= left) {
          // left moves when it encounters a duplicate
          left = maxSubstring[char] + 1
      }

      maxSubstring[char] = right
      maxLength = Math.max(maxLength, right - left + 1)
      right++
  }
  return maxLength
};