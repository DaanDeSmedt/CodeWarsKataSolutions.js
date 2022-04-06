/**
 * 
 * Find the sum of all multiples of n below m
 * 
 * URL : https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
 * 
 */

function sumMul(n, m) {
  if (n >= m) return 'INVALID'
  const last = Math.ceil(m / n) * n - n
  return (last + n) * (last / n) / 2
}