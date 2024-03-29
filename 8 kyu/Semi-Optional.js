/**
 * 
 * We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.
 * 
 * URL : https://www.codewars.com/kata/521cd52e790405a74800032c/train/javascript
 * 
 */

function wrap(value) {
  return {
    "value": value
  };
}