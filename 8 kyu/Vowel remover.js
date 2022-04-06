/*
  Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

  Examples
    "hello"     -->  "hll"
    "codewars"  -->  "cdwrs"
    "goodbye"   -->  "gdby"
    "HELLO"     -->  "HELLO"

  Don't worry about uppercase vowels
  y is not considered a vowel for this kata

  
  URL : https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
 
 */

function remove(string) {
  return string.replace(/[aeiou]/g, '')
}