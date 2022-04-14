/*
    Title: Remove String Spaces

    Description:
    Simple, remove the spaces from the string, then return the resultant string.
    
    For C, you must return a new dynamically allocated string.
    

    Link to Kata : https://www.codewars.com/kata/57eae20f5500ad98e50002c5
*/
function noSpace(x) {
    return x
        .split(' ')
        .join('')
}