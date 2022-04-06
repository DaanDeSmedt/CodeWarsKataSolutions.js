/*
*
* Build Tower by the following given argument:
* number of floors (integer and always greater than 0).
*
* Tower block is represented as *
* JavaScript: returns an Array;
*
* for example, a tower of 3 floors looks like below
*
* [
*   '  *  ', 
*   ' *** ', 
*   '*****'
* ]
*
* URL : https://www.codewars.com/kata/build-tower/javascript
*
*/

function towerBuilder(nFloors) {
  var _floors = [];  
  for (var i = 1; i <= nFloors; i++){
    var _block = "";    
    _block += (" ".repeat(nFloors-i));
    _block += ("*".repeat(1+(i-1)*2));
    _block += (" ".repeat(nFloors-i));    
    _floors.push(_block);    
  }  
  return _floors;
}