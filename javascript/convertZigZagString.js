/**
 * EXAMPLES:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 */

/**
 * This took a lot longer then expected and
 * was again over-thinking:
 * 
 * I thought I would have to incorporate cycles for instance
 * 
 * We have 3 rows but we determine the cycles by 2(3 - 1) = 4
 * and a cycle consistence of top to bottom to diagonal upwards
 * once finished cycle it starts at the top of the next column and goes down etc.
 * the formula works because a start of a cycle is 0, 4, 8, 12
 * the first down is 1, 2 which is together 0 1 2 but we need 3 rows
 * so we stop there fill in the diagonal with the next 3 which completes
 * the cycle 0, 1, 2, 3 then we start the next cycle with 4 and continue the process
 * 
 * formulating a cycle:
 * Write out a few examples to see the repeating structure.
 * Count how often the first-row characters appear → This hints at a cycle.
 * Look at how characters move downward and diagonally → Notice it's symmetric.
 * Generalize the pattern → Find a simple formula that fits all cases.
 */

/**
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s

  let rows = Array(numRows).fill("")
  const cycleLen = 2 * (numRows - 1)

  for (let i = 0; i < s.length; i++) {
      let mod = i % cycleLen
      let row = mod < numRows
        ? mod
        : cycleLen - mod
      
      rows[row] += s[i]
  }

  return rows.join("")
}

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convertZigZagString = (s, numRows) => {
  if (numRows === 1) return s
  let rows = Array(numRows).fill("")
  // const cycles = 2 * (numRows - 1)
  let isDown = false
  let row = 0

  for (let i = 0; i < s.length; i++) {
      rows[row] += s[i]

      if (row === 0 || row === numRows - 1) {
          isDown = !isDown
      }

      row += isDown ? 1 : -1
  }

  return rows.join("")
}