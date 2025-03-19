/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let addedBinary = ''
  let isCarried = false
  const binaryLenA = a.length - 1
  const binaryLenB = b.length - 1

  let sum = BigInt(a) + BigInt(b)
  return sum.toString(2)
}

console.log(addBinary("11", "1"))