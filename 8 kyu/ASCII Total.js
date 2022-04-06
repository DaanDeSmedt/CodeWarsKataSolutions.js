/*

  You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
  examples: uniTotal("a") == 97 uniTotal("aaa") == 291

  URL : https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
 
 */

function uniTotal(string) {
  return string.split('').reduce((previous, current) => previous + Number.parseInt(current.charCodeAt(0)), 0)
}