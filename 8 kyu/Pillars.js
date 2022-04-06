/**
 * 
 * There are pillars near the road. 
 * The distance between the pillars is the same and the width of the pillars is the same. 
 * 
 * Your function accepts three arguments:
 * Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
 * 
 * URL : https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
 * 
 */

function pillars(num_pill, dist, width) {
  return num_pill > 1 ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width : 0;
}