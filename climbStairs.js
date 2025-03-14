/**
 * factorial Helper
 * @param {number} num 
 * @return {number}
 */
const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);

/**
 * First approach (binomial sum)
 * @param {number} n
 * @return {number}
 */
const climbStairsOld = (n) => {
    let ways = 0;
    for (let k = 0; k <= Math.floor(n / 2); k++) {
        ways += factorial(n - k) / (factorial(k) * factorial(n - 2 * k));
    }
    return ways;
};

/**
 * Second approach Dynamic programming!
 * @param {number} n
 * @param {{}} memo
 * @return {number}
 */
const climbStairs = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n === 1) return 1
  if (n === 2) return 2
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
  return memo[n]
};

/**
 * Binet’s formula
 * @param {number} n
 * @return {number}
 */
const climbStairsBinet = (n) => {
  const sqrt5 = Math.sqrt(5);
  return Math.round(((1 + sqrt5) / 2) ** (n + 1) / sqrt5);
};