/**
 * 
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 * 
 * URL : https://www.codewars.com/kata/56b1f01c247c01db92000076
 * 
 */

function doubleChar(str) {
  return str.split('').map((char) => `${char}${char}`).join('');
}
