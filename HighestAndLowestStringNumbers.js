/*
*
* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*
* Example:
* highAndLow("1 2 3 4 5"); // return "5 1"
* highAndLow("1 2 -3 4 5"); // return "5 -3"
* highAndLow("1 9 3 4 -5"); // return "9 -5"
*
* URL : https://www.codewars.com/kata/highest-and-lowest/javascript
*
*/

function highAndLow(numbers){
	var _nums = numbers.split(" ");
	_nums.sort(function(a,b){return a - b})
	return _nums[_nums.length - 1] + ' ' + _nums[0];  
}