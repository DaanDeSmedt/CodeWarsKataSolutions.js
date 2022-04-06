/*
*
* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and * preserving the original order of elements.
*
* For example:
*
* uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
* uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
* uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*
* URL : https://www.codewars.com/kata/unique-in-order/javascript
*
*/

var uniqueInOrder=function(iterable){
  var _data = (iterable.constructor === Array) ? iterable : iterable.split('');
  var _matches = [];
  // loop
  for (i = 0; i < _data.length; i++) { 
    if(_data[i-1] != _data[i]) _matches.push(_data[i]);   
  }
  // return
  return _matches;
}