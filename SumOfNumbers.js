/*
*
* Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
*
* Note! a and b are not ordered!
* 
* Example: 
* GetSum(1, 0) == 1   // 1 + 0 = 1
* GetSum(1, 2) == 3   // 1 + 2 = 3
* GetSum(0, 1) == 1   // 0 + 1 = 1
* GetSum(1, 1) == 1   // 1 Since both are same
* GetSum(-1, 0) == -1 // -1 + 0 = -1
* GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*
* URL : https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/javascript
*
*/

/*
* Working long approach
*/
function GetSum( a,b )
{
  var _from = a, _to = b, _total = 0;
  if(a > b) { _from = b; _to = a; }   
  for(i=_from; i<=_to;i++){
    _total += i;
  }
  return _total;
}

/*
* Working compact approach
*/
function GetSum(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);  
  return (max - min + 1) * (min + max) / 2;
}