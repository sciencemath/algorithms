/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s.length <= 1) return s
  let longestSubstring = ""

  const expandAroundCenter = (left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          left--
          right++
      }

      return s.substring(left+1, right)
  }

  for (let i = 0; i < s.length; i++) {
      const odd = expandAroundCenter(i, i)
      const even = expandAroundCenter(i, i+1)

      if (odd.length > longestSubstring.length) {
          longestSubstring = odd
      }

      if (even.length > longestSubstring.length) {
          longestSubstring = even
      }
  }

  return longestSubstring
};

// some test data
console.log(longestPalindrome("madam"))
console.log(longestPalindrome("racecar"))
console.log(longestPalindrome("deified"))
console.log(longestPalindrome("redivider"))
console.log(longestPalindrome("tattarrattat"))