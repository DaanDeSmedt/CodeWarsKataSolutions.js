/*
    Title: Simple multiplication

    Description:
    This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

    Link to Kata : https://www.codewars.com/kata/583710ccaa6717322c000105
*/
function simpleMultiplication(number) {
    return number * (number % 2 === 0 ? 8 : 9)
}
