/*

  Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
  Note: input will never be an empty string

  URL : https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
 
 */

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return []

  const positives = input
    .filter(number => number > 0)

  const negatives = input
    .filter(number => number < 0)
    .reduce((total, number) => total + number, 0)

  return [positives.length, negatives]
}