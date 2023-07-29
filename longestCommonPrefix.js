/**
 * LongestCommonPrefix:
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 * I setup a formal data structure to better understand the outcome,
 * there is probably a better solution maybe recursion?
 *
 * First thought:
 * {
 *  'f': [0, 3]
 *  'l': [1, 3]
 *  'o': [2, 2]
 * }
 *
 * Where the first item in the array of the key is the position, and the second
 * item in array is orrurances, this seemed fine with the test data but then I
 * was trying more words specifically: ["flower","flow","flighto"] (note the o at the end of `flighto`)
 * so with the setup I had would produce (similar to above):
 *
 * {
 *  'f': [0, 3]
 *  'l': [1, 3]
 *  'o': [2, 3]
 * }
 *
 * This wasn't going to work I needed a way to uniquely have the proper keys instead
 * of relying on the values in the array so this is what I came up with kinda weird but works!
 *
 * {
 * 'f0': 3
 * 'l1': 3
 * 'o2': 2
 * ...
 * 'o6': 1
 * }
 *
 * the key would combine the letter and index and the value would be occurances
 * below is the algo in practice using data structure above.
 *
 * Side note: A better solution I came across after solving this was sorting the array via .sort
 * looping through the first word and comparing it to the last word until no match is found:
 * (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substring(0, i)
 *
 * could've used (.slice, .substring) edit in place.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefixLength = strs.length;
  let prefix = '';
  let isBetweenLetter = false;
  const common = {};

  strs.forEach((word) => {
    word.split('').forEach((letter, letterIndex) => {
      if (common[`${letter}${letterIndex}`]) {
        common[`${letter}${letterIndex}`] = ++common[`${letter}${letterIndex}`];
      } else {
        common[`${letter}${letterIndex}`] = 1;
      }
    });
  });

  Object.entries(common).forEach(([key, value]) => {
    /**
     * occurance will always equal the length of the words passed in,
     * also need to check in between letters for example: ["cir","car"] -> { c0: 2, i1: 1, r2: 2, a1: 1 }
     * i1 is not needed should be "c" not "cr"
     */
    if (value === prefixLength && !isBetweenLetter) {
      prefix += key.split('')[0];
    } else {
      isBetweenLetter = true;
    }
  });

  return prefix;
};
