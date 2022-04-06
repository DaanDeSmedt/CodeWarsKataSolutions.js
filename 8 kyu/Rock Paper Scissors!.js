/**
 * 
 * Let's play! You have to return which player won! In case of a draw return Draw!.
 * 
 * URL : https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
 * 
 */
const rps = (p1, p2) => {
  return p1 === p2 ? 'Draw!' : `Player ${/rockscissors|scissorspaper|paperrock/.test(`${p1}${p2}`) ? 1 : 2} won!`
};