/**
 * 
 * For every good kata idea there seem to be quite a few bad ones!
 * In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
 * If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
 * If there are no good ideas, as is often the case, return 'Fail!'.
 * 
 * URL : https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
 * 
 */
function well(x) {
  const good = x.filter(idea => idea === 'good').length
  if (good > 2) return 'I smell a series!'
  if (good > 0) return 'Publish!'
  return 'Fail!'
}