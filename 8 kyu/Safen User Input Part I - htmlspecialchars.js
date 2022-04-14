/*
    Title: Safen User Input Part I - htmlspecialchars

    Description:
    Safen User Input Part I - htmlspecialchars
    
    You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease.  However, with ease comes danger.  Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting).  This is done by injecting
    Mission
    
    Your mission is to implement a function that converts the following potentially harmful characters:
    
    Good luck :D
    
    Extension
    
    If you are an experienced programmer, try shortening your code as much as possible and optimise it to minimise run time.  Experienced programmers should be able to complete this exercise in one line of code.

    Link to Kata : https://www.codewars.com/kata/56bcaedfcf6b7f2125001118
*/
function htmlspecialchars(formData) {
    const chars = { '<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;' }
    return formData.replace(/[<>"&]/g, char => chars[char])
}