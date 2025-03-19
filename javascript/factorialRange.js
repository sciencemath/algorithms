/**
 * 
 * @param {num} num 
 * @returns {num}
 */
const factorial = (num) => {
  if (num === 0 || num === 1) return 1
  return num * factorial(num - 1)
}

/**
 * 
 * @param {number} m - max
 * @param {number} n - min
 * @returns 
 */
const factorialRange = (m, n) => {
  if (m > n) return console.error("m should be less than or equal to n");
  for (let i = n; i >= m; i--) {
      console.log(`${i}! = ${factorial(i)}`)
  }
}

factorialRange(1, 10)