/*
*
* Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
* (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
*
* Example:
*
* { 6, 2, 1, 8, 10 } => 16
* { 1, 1, 11, 2, 3 } => 6
*
* URL : https://www.codewars.com/kata/sum-without-highest-and-lowest-number
*
*/

function sumArray(array) {
  if(!array || !Array.isArray(array)) return 0;
  _sorted = array.sort(sort);
  _sorted.splice(0,1);
  _sorted.splice(_sorted.length-1,1);
  return _sorted.reduce(add, 0);
}

function sort(a,b) {
  return a-b;
}

function add(a,b){
  return a+b;
}