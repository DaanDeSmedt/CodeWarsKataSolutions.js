/**
 * 
 * Write a function that checks if a given string (case insensitive) is a palindrome.
 * 
 * URL : https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
 * 
 */

function isPalindrome(x) {
  return x.toLowerCase().split('').reverse().join('') === x.toLowerCase();
}