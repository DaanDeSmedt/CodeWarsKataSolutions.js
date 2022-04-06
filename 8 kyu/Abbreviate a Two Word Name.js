/**
 * 
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 * The output should be two capital letters with a dot separating them.
 * 
 * URL : https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
 * 
 */

function abbrevName(name) {
  return name
    .split(' ')
    .map(name => name[0].toUpperCase())
    .join('.')
}