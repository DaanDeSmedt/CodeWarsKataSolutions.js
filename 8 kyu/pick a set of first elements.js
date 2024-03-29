/*
    Title: pick a set of first elements

    Description:
    Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
    
    If n == 0 return an empty sequence []
    
    Examples
    
    var arr = ['a', 'b', 'c', 'd', 'e'];
    first(arr) //=> ['a'];
    first(arr, 2) //=> ['a', 'b']
    first(arr, 3) //=> ['a', 'b', 'c'];
    first(arr, 0) //=> [];
    
    var arr = new object[] { 'a', 'b', 'c', 'd', 'e' };
    Kata.TakeFirstElements(arr); //=> new object[] { 'a' }
    Kata.TakeFirstElements(arr, 2);// => new object[] { 'a', 'b' }
    Kata.TakeFirstElements(arr, 3); //=> new object[] { 'a', 'b', 'c' }
    Kata.TakeFirstElements(arr, 0); //=> new object[] { }
    
    arr = ['a', 'b', 'c', 'd', 'e']
    first(arr)    # --> ['a']
    first(arr, 2) # --> ['a', 'b']
    first(arr, 3) # --> ['a', 'b', 'c']
    first(arr, 0) # --> []
    

    Link to Kata : https://www.codewars.com/kata/572b77262bedd351e9000076
*/
function first(arr, n = 1) {
    return arr.slice(0, n)
}