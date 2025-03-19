/**
 * First approach
 * 
 * @param {[]} arr 
 * @param {[]} current 
 * @returns []
 */
const recursiveFlatten = (arr, current = []) => {
  if (!arr.length) return current;
  if (Array.isArray(arr[0])) {
      const element = arr[0].shift()
      const middle = arr[0].slice(0, arr[0].length)
      const restArray = arr.slice(1, arr.length)
      return recursiveFlatten([element, ...middle, ...restArray], current)
  } else {
      const element = arr.shift()
      current.push(element)
      return recursiveFlatten(arr, current)
  }
}
console.log(recursiveFlatten([[[1]], 3, [2, 3, 4, [6]], 5, [6]]))

/**
 * 
 * @param {[]} arr
 * @return {[]}
 * Second approach
 */
const flattenArray = (arr, acc = []) => {
  return arr.reduce((acc, val) => 
      Array.isArray(val) 
      ? acc.concat(flattenArray(val))
      : acc.concat(val), 
  []);
}

console.log(flattenArray([1, [2, [3, 4], 5], [6, 7]])); 