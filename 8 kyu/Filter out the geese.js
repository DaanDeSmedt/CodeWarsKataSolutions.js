/**
 * 
 * Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
 * 
 * URL : https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
 * 
 */

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird))
};