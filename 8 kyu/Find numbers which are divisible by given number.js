/*
    Title: Find numbers which are divisible by given number

    Description:
    Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
    
    Example
    
    divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    divisible_by([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    divisible_by([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    divisible_by([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    divisible_by([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    divisibleby([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    divisible_by([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
    divisible_by({1, 2, 3, 4, 5, 6}, 2) == {2, 4, 6}
    DivisibleBy(new int[]{ 1, 2, 3, 4, 5, 6}, 2) == new int[] {2, 4, 6}
    divisibleBy :: [Int] -> Int -> [Int]
    [1, 2, 3, 4, 5, 6] divisibleBy 2 = [2, 4, 6]
    (divisible-by '(1 2 3 4 5 6) 2) ; '(2 4 6)
    divisible_by([1, 2, 3, 4, 5, 6], 2) = [2, 4, 6]
    

    Link to Kata : https://www.codewars.com/kata/55edaba99da3a9c84000003b
*/
function divisibleBy(numbers, divisor) {
    return numbers
        .filter((a) => a % divisor === 0)
}