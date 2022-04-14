/*
    Title: Multiplication table for number

    Description:
    Your goal is to return multiplication table for
    For example, a multiplication table (string) for
    1 * 5 = 5
    2 * 5 = 10
    3 * 5 = 15
    4 * 5 = 20
    5 * 5 = 25
    6 * 5 = 30
    7 * 5 = 35
    8 * 5 = 40
    9 * 5 = 45
    10 * 5 = 50
    
    P. S. You can use
    P. S. You can use
    Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

    Link to Kata : https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
*/
function multiTable(number) {
    return [...Array.from({ length: 10 })]
        .map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`)
        .join('\n')
}