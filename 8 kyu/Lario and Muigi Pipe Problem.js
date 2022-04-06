/**
 * 
 * Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
 * The pipes connecting your level's stages together need to be fixed before you receive any more complaints. 
 * Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.
 * Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
 * 
 * URL : https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
 * 
 */
function fakeBin(x) {
  return x
    .split('')
    .map(n => n < 5 ? 0 : 1)
    .join('')
}