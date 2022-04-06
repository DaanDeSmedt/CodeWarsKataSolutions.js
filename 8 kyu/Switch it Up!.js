/*
    Title: Switch it Up!

    Description:
    When provided with a number between 0-9, return it in words.
    
    Input :: 1
    
    Output :: "One".
    
    If your language supports it, try using a switch statement.

    Link to Kata : https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
*/

// sorry switches are witches ...
function switchItUp(number) {
    return [
        'Zero',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
    ][number]
}