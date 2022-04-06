/*
    Title: Grasshopper - Terminal game move function

    Description:
    Terminal game move function
    
    In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
    
    Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
    In SQL, you will be given a table moves with columns position and roll. Return a table which uses the current position of the hero and the roll (1-6) and returns the new position in a column res.
    
    Example:
    move(3, 6) should equal 15
    
    BF:
    
    Since this is an 8kyu kata, you are provided a modified runBF function, numericRunBF, that automatically parses input and output for your ease.
    
    See the sample test cases to see what I mean: You can simply input two numbers and get a number as output (unless you're doing something wrong), so it should be convenient for you to modify the tests as you wish.
    
    Oh, and you won't have to worry about overflow, the correct answer will never be higher than 255. :)
    

    Link to Kata : https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
*/
function move(position, roll) {
    return position + 2 * roll
}