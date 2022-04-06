/*
    Title: String cleaning

    Description:
    Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:
    
    string_clean('! !') == '! !'
    string_clean('123456789') == ''
    string_clean('This looks5 grea8t!') == 'This looks great!'
    
    stringClean('! !') == '! !'
    stringClean('123456789') == ''
    stringClean('This looks5 grea8t!') == 'This looks great!'
    
    Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
    

    Link to Kata : https://www.codewars.com/kata/57e1e61ba396b3727c000251
*/
function stringClean(s) {
    return s.replace(/[0-9]/g, '')
}