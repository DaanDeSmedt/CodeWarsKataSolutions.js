/*
*
* Write function avg which calculates average of numbers in given list.
*
* URL : https://www.codewars.com/kata/calculate-average
*
*/

function find_average(array) {
  return array.reduce((a, b) => a + b, 0)/array.length;
}