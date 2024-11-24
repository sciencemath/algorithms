/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * 
 * return the length of the last word in a given string, 
 * consisting of non-space characters only.
 * 
 * Input: s = "Hello World"
 * Output: 5
 *
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * 
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * 
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => s.trim().split(' ').at(-1).length