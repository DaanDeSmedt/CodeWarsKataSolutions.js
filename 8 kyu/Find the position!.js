/*
    Title: Find the position!

    Description:
    When provided with a letter, return its position in the alphabet.
    
    Input :: "a"
    
    Ouput :: "Position of alphabet: 1"
    
    This kata is meant for beginners. Rank and upvote to bring it out of beta
    

    Link to Kata : https://www.codewars.com/kata/5808e2006b65bff35500008f
*/
function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt() - 96}`
}