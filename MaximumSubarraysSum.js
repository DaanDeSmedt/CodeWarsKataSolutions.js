/*
*
* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
*
* maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
* // should be 6: [4, -1, 2, 1]
* Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
*
* Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*
* URL : https://www.codewars.com/kata/maximum-subarray-sum/javascript
*
*/

function maxSequence(arr){
  var currentMax = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i += 1) {
      currentMax = Math.max(0, currentMax + arr[i]);
      max = Math.max(max, currentMax);
    }
    return max;
}