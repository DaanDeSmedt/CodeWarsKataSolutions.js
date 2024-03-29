/*
    Title: Keep Hydrated!

    Description:
    Nathan loves cycling.
    
    Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
    
    You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
    
    For example:
    time = 3 ----> litres = 1
    
    time = 6.7---> litres = 3
    
    time = 11.8--> litres = 5
    hours = 3 ----> liters = 1
    
    hours = 6.7---> liters = 3
    
    hours = 11.8--> liters = 5
    
    You have to return 3 columns: id, hours and liters (not litres, it's a difference from the kata description)
    ~

    Link to Kata : https://www.codewars.com/kata/582cb0224e56e068d800003c
*/
function litres(time) {
    return Math.floor(time * 0.5)
}