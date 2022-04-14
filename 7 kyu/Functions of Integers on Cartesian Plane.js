/*
    Title: Functions of Integers on Cartesian Plane

    Description:
    Consider integer coordinates x, y in the Cartesian plan and three functions f, g, h
    defined by:
    f: 1  f(x, y) = min(x, y)
    g: 1  g(x, y) = max(x, y)
    h: 1  h(x, y) = x + y
    where n is a given integer (n >= 1, guaranteed) and x, y are integers.
    
    In the table below you can see the value of the function f with n = 6.
    
      ---|0 |1|2|3|4|5|6|
      -- |--|--|--|--|--|--|--|
      6|- |1 |2 |3 |4 |5 |6 |
      5|- |1 |2 |3 |4 |5 |5 |
      4|- |1 |2 |3 |4 |4 |4 |
      3|- |1 |2 |3 |3 |3 |3 |
      2|- |1 |2 |2 |2 |2 |2 |
      1|- |1 |1 |1 |1 |1 |1 |
      0|- |- |- |- |- |- |- |
    
    The task is to calculate the sum of f(x, y), g(x, y) and h(x, y) for all integers x and y such that (1  91
    sumin(45) --> 31395
    sumin(999) --> 332833500
    sumin(5000) --> 41679167500
    
    sumax(6) --> 161
    sumax(45) --> 61755
    sumax(999) --> 665167500
    sumax(5000) --> 83345832500
    
    sumsum(6) --> 252
    sumsum(45) --> 93150
    sumsum(999) --> 998001000
    sumsum(5000) --> 125025000000
    

    Link to Kata : https://www.codewars.com/kata/559e3224324a2b6e66000046
*/
function sumin(n) {
  return n * (n + 1) * (2 * n + 1) / 6
}
function sumax(n) {
  return n * (n + 1) * (4 * n - 1) / 6
}
function sumsum(n) {
  return n * n * (n + 1)
}