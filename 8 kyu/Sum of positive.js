/**
 * 
 * You get an array of numbers, return the sum of all of the positives ones.
 * 
 * URL : https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
 * 
 */

function positiveSum(arr) {
  return arr.reduce((previous, current) => (Math.sign(current) === 1 ? previous + current : previous), 0)
}