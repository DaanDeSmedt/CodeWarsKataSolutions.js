/*
*
*
* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
*
* URL : https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
*
*/

function powersOfTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i);
}