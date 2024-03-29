/*
    Title: Check same case

    Description:
    Write a function that will check if two given characters are the same case.
    
    If any of characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters and not the same case, return 0
    
    Examples
    
    'a' and 'g' returns 1
    
    'A' and 'C' returns 1
    
    'b' and 'G' returns 0
    
    'B' and 'g' returns 0
    
    '0' and '?' returns -1
    

    Link to Kata : https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
*/
function sameCase(a, b) {
    return /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1
}