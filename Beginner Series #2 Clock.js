/*
*
* Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
* Your task is to make 'Past' function which returns time converted to miliseconds.
*
* Example:
* past(0, 1, 1) == 61000
*
* url : https://www.codewars.com/kata/beginner-series-number-2-clock
*
*/

function past(h, m, s){
  return (h*3600000) + (m*60000) + (s*1000);
}