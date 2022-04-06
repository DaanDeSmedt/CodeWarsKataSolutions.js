/**
 * 
 * In this simple exercise, you will create a program that will take two lists of integers, a and b. 
 * Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
 * You must find the difference of the cuboids' volumes regardless of which is bigger.
 * 
 * URL : https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
 * 
 */

function findDifference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}