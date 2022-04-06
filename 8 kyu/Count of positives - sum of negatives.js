/**
 * 
 * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
 * 0 is neither positive nor negative.
 * 
 * If the input is an empty array or is null, return an empty array.
 * 
 * URL : https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
 * 
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