/*
    Title: NBA full 48 minutes average

    Description:
    An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
    
    Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
    
    Examples:
    pointsPer48(12, 20) // 28.8
    pointsPer48(10, 10) // 48
    pointsPer48(5, 17) // 14.1
    pointsPer48(0, 0) // 0
    nba_extrap(12, 20) # 28.8
    nba_extrap(10, 10) # 48
    nba_extrap(5, 17) # 14.1
    nba_extrap(0, 0) # 0
    Kata.NbaExtrap(12, 20) => 28.8
    Kata.NbaExtrap(10, 10) => 48
    Kata.NbaExtrap(5, 17)  => 14.1
    Kata.NbaExtrap(0, 0)   => 0
    nba_extrap(12, 20) # 28.8
    nba_extrap(10, 10) # 48
    nba_extrap(5, 17) # 14.1
    nba_extrap(0, 0) # 0
    
    Notes:
    All inputs will be either be an integer or float.
    Follow your dreams!
    

    Link to Kata : https://www.codewars.com/kata/587c2d08bb65b5e8040004fd
*/
function pointsPer48(ppg, mpg) {
    return mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0
}