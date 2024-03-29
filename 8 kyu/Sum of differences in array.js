/*
    Title: Sum of differences in array

    Description:
    Your task is to sum the differences between consecutive pairs in the array in descending order.
    
    For example:
    sumOfDifferences([2, 1, 10])
    sumofdifferences([2, 1, 10])
    Returns 9
    
    Descending order: [10, 2, 1]
    
    Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
    
    If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
    

    Link to Kata : https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
*/
function sumOfDifferences(arr) {
    return arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr)
}