/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * What I did wrong was that I was passing all test cases
 * but there was one [[1,4],[5,6]] -> [[1, 6]] instead of treating
 * as a range I needed maintain there original structure
 * (over-thinking I think was my problem here)
 * 
 * FIRST FAILED ITERATION:
 */
var merge = function(intervals) {
  const current = new Set()
  let mergedIntervals = []
  let range = [0, 0]
  let inRange = false

  intervals.forEach((iterval, k) => {
      const [start, end] = iterval
      for (let i = end; i >= start; i--) {
          current.add(i)
      }
  })

  const sorted = [...current].sort((a, b) => a - b)
  const firstElement = sorted[0]
  const lastElement = sorted[sorted.length - 1]
  console.log('SORTED', sorted)

  sorted.forEach((curr, i) => {
      const isSequential = sorted[i+1] === sorted[i]+1
      console.log(range)

      if (range[0] === 0) {
          range[0] = curr
          inRange = true
      }

      if (inRange && !isSequential) {
          range[1] = sorted[i]
          inRange = false
          mergedIntervals.push(range)
          range = [0, 0]
      }

      if (curr === lastElement && inRange) {
          range[1] = lastElement
          inRange = false
          mergedIntervals.push(range)
          range = [0, 0]
      }
  })
  return mergedIntervals
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * FINAL ITERATION:
 * Starting over taking a different approach
 * preserving original structure (non-contiguous sequence)
 * 
 * Iterate through check if they overlap with the previous interval.
 * Merge them if they overlap (update the end of the last interval).
 */
const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])
  const merged = []

  for (let [start, end] of intervals) {
      if (merged.length && merged[merged.length - 1][1] >= start) {
          merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end)
      } else {
          merged.push([start, end])
      }
  }

  return merged
};

// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[4,6], [5,9]]))
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// [[1,4],[5,6]] -> first had [[1,6]] but should be [[1,4], [5,6]]
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[5,6]]))