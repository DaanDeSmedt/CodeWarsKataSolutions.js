/*
    Title: Generate range of integers

    Description:
    Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min  0
    the range does not HAVE to include max (depending on the step)
    

    Link to Kata : https://www.codewars.com/kata/55eca815d0d20962e1000106
*/
function generateRange(min, max, step) {
    return Array
        .from({ length: 1 + (max - min) / step })
        .map((n, i) => (i * step) + min)
}
