/**
 * Input(6)
 * Prints:
 *
 *       #
 *      ##
 *     ###
 *    ####
 *   #####
 *  ######
 *
 * @param {number} n
 */
function staircase(n) {
  for (let i = 1; i < n + 1; i++) {
    console.log(`${''.padStart(n + 1 - 1 - i)}${'#'.repeat(i)}`);
  }
}
