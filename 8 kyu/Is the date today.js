/**
 * 
 * Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.
 * 
 * URL : https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript
 * 
 */

function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}