/*
    Title: How much water do I need?

    Description:
    My washing machine uses
    For example, if the amount of clothes is
    Write a function
    My washing machine is an old model that can only handle double the amount of
    The answer should be rounded to the nearest 2 decimal places.
    

    Link to Kata : https://www.codewars.com/kata/575fa9afee048b293e000287
*/
function howMuchWater(water, load, clothes) {
    return clothes > 2 * load
        ? 'Too much clothes'
        : (clothes < load ? 'Not enough clothes' : Number((water * 1.1 ** (clothes - load)).toFixed(2)))
}