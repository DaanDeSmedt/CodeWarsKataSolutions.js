/**
 * 
 * Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
 * 
 * URL : https://www.codewars.com/kata/577a98a6ae28071780000989
 * 
 */

var min = function (list) {
  return Math.min(...list)
}

var max = function (list) {
  return Math.max(...list)
}