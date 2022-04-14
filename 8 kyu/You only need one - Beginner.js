/*
    Title: You only need one - Beginner

    Description:
    You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
    
    The type of a and x can be String or Int.
    Array can contain numbers or strings. X can be either.
    In racket, you'll be given a list instead of an array. If the value is in the list,
    return #t instead of another value that is also considered true.
    (contains '(1 2 3) 3) ; returns #t
    (contains '(1 2 3) 5) ; returns #f
    
    Return true if the array contains the value, false if not.

    Link to Kata : https://www.codewars.com/kata/57cc975ed542d3148f00015b
*/
function check(a, x) {
    return a.indexOf(x) > -1
}