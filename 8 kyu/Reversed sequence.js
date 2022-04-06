/**
 * 
 * Build a function that returns an array of integers from n to 1 where n>0.
 * 
 * URL : https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
 * 
 */
var countSheep = function (num) {
  return Array.from(
    { length: num },
    (_, i) => `${i + 1} sheep...`
  ).join('')
}