/*
    Title: Super Duper Easy

    Description:
    Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
    
    Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.
    `

    Link to Kata : https://www.codewars.com/kata/55a5bfaa756cfede78000026
*/
function problem(x){
  return typeof x === 'number' ? (x*50)+6 : "Error"
}