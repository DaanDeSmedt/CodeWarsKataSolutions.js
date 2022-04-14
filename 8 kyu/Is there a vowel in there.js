/*
    Title: Is there a vowel in there?

    Description:
    Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
    
    If they are, change the array value to a string of that vowel.
    
    Return the resulting array.

    Link to Kata : https://www.codewars.com/kata/57cff961eca260b71900008f
*/
function isVow(a) {
    return a.map(
        number =>
            /[aeiou]/.test(String.fromCharCode(number))
                ? String.fromCharCode(number)
                : number
    )
}