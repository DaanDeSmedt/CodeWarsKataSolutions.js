/*
    Title: Get Nth Even Number

    Description:
    Return the Nth Even Number
    
    Example(Input --> Output)
    
    1 --> 0 (the first even number is 0)
    3 --> 4 (the 3rd even number is 4 (0, 2, 4))
    100 --> 198
    1298734 --> 2597466
    
    The input will not be 0.

    Link to Kata : https://www.codewars.com/kata/5933a1f8552bc2750a0000ed
*/

function nthEven(n) {
    return (n - 1) * 2
}