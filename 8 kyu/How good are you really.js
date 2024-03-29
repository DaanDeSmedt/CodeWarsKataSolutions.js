/*
    Title: How good are you really?

    Description:
    There was a test in your class and you passed it. Congratulations!
    But you're an ambitious person. You want to know if you're better than the average student in your class.
    
    You receive an array with your peers' test scores. Now calculate the average and compare your score!
    
    Return True if you're better, else False!
    
    Return #t if you're better, else #f.
    
    Return 1 if you're better, else 0!
    
    Note:
    
    Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
    

    Link to Kata : https://www.codewars.com/kata/5601409514fc93442500010b
*/
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length
}
