/**
 * 
 * Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
 * 
 * URL : https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript
 * 
 */
function eachCons(array, n) {
  let subsets = []
  for (i = 0; i < (array.length + 1) - n; i++) {
    subsets.push(array.slice(i, i + n))
  }
  return subsets
}