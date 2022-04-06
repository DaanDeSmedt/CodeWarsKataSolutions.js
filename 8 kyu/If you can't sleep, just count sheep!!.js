/**
 * 
 * If you can't sleep, just count sheep!!
 * Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 * 
 * URL : https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
 * 
 */
function getAge(inputString) {
  return parseInt(inputString.match(/\d/)[0])
  // return parseInt(inputString.charAt(0))
}