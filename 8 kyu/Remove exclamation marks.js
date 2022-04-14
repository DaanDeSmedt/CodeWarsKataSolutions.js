/*
    Title: Remove exclamation marks

    Description:
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
    

    Link to Kata : https://www.codewars.com/kata/57a0885cbb9944e24c00008e
*/
function removeExclamationMarks(s) {
    return s.replace(/!/g, '')
}