/*

  Wilson primes satisfy the following condition. Let P represent a prime number.

  Then ((P-1)! + 1) / (P * P) should give a whole number.

  Your task is to create a function that returns true if the given number is a Wilson prime.


  URL : https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/train/javascript

 */

function amIWilson(p) {
  return (factorial(p - 1) + 1) / Math.pow(p, 2) % 1 === 0;
}

function factorial(p) {
  if (p == 0) return 1
  else return p * factorial(p - 1);
}