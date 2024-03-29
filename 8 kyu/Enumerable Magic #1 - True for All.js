/*
    Title: Enumerable Magic #1 - True for All?

    Description:
    Task
    Create a method all which takes two params:
    a sequence
    a function (function pointer in C)
    
    and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
    
    Example
    all((1, 2, 3, 4, 5), greaterthan9) -> false
    all((1, 2, 3, 4, 5), lessthan9)    -> True
    
    Help
    Here's a (Ruby) resource if you get stuck:
    
    http://www.rubycuts.com/enum-all
    

    Link to Kata : https://www.codewars.com/kata/54598d1fcbae2ae05200112c
*/
function all(arr, fun) {
    return arr.every(fun)
}