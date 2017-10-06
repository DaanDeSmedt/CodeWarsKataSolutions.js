/*
*
* Modify the kebabize function so that it converts a camel case string into a kebab case.
* 
* kebabize('camelsHaveThreeHumps') // camels-have-three-humps
* kebabize('camelsHave3Humps') // camels-have-humps
*
* Notes: the returned string should only contain lowercase letters
*
* URL : https://www.codewars.com/kata/57f8ff867a28db569e000c4a
*
*/

function kebabize(str) {
  return str.replace(/[^a-zA-Z]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase();
}