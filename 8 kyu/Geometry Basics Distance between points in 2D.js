/*
    Title: Geometry Basics: Distance between points in 2D

    Description:
    This series of katas will introduce you to basics of doing geometry with computers.
    
    Point objects have x and y attributes (X and Y in C#) attributes.
    
    Write a function calculating distance between Point a and Point b.
    
    Tests round answers to 6 decimal places.

    Link to Kata : https://www.codewars.com/kata/58dced7b702b805b200000be
*/
function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y)
}