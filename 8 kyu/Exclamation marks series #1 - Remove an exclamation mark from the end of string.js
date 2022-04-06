/**
 * 
 * Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
 * 
 * URL : https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
 * 
 */

function remove(string) {
  return string.replace(/!$/, '')
}