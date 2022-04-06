/**
 * 
 * "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.
 * 
 * Given two points P and Q, output the symmetric point of point P about Q. 
 * Each argument is a two-element array of integers representing the point's X and Y coordinates. 
 * Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.
 * 
 * URL : https://www.codewars.com/kata/57bfea4cb19505912900012c/train/javascript
 * 
 */

function symmetricPoint(p, q) {
  return [2 * q[0] - p[0], 2 * q[1] - p[1]]
}