/*
*
*
* Your task is to write a function which returns the sum of following series upto nth term(parameter).
*
* Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
*
*
* You need to round the answer upto 2 decimal places and return it as String.
* If the given value is 0 then it should return 0.00
* You will only be given Natural Numbers as arguments.
*
*
* Examples:
*
* SeriesSum(1) => 1 = "1"
* SeriesSum(2) => 1 + 1/4 = "1.25"
* SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
*
* URL : https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/javascript
*
*/

function SeriesSum(n) {
  var _count = (n > 0) ? 1 : 0;
  for (var i = 0; i < n - 1; i++) { 
    _count += (1/(4+(3*i)));
  }
  return _count.toFixed(2);
}