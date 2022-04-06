/**
 * 
 * There are some columns of toy cubes in the box arranged in a line. 
 * The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. 
 * When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right).
 * Below is an example of what a box of cubes might look like before and after switching gravity.
 * 
 * URL : https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
 * 
 */

const flip = (d, a) => {
  return d === "R" ? a.sort(function (x, y) { return x - y }) : a.sort(function (x, y) { return y - x })
}