/**
 * input: haystack = "sadbutsad", needle = "sad"
 * output: first index of the found word, 0 in this case
 * if not found -1
 * 
 * My first thought is indexOf, testing with regex is
 * slower but gives more flexible matching
 * 
 * came up with a third without regex or indexOf
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const searchString = (haystack, needle) => 
  haystack.indexOf(needle)
/**
* @param {string} haystack
* @param {string} needle
* @return {number}
*/
const searchStringRegExp = (haystack, needle) => {
  const regex = new RegExp(needle)
  return haystack.search(regex)
}
/**
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @returns {number}
 */
const subString = (haystack, needle) => {
  let foundIndex = -1
  haystack.split('').forEach((letter, i) => {
    if (haystack.substring(i, i + needle.length) === needle) {
      if (foundIndex === -1) foundIndex = i
    } 
  })
  return foundIndex
}