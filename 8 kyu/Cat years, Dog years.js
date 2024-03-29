/*
    Title: Cat years, Dog years

    Description:
    
    Kata Task
    
    I have a cat and a dog.
    
    I got them at the same time as kitten/puppy. That was humanYears years ago.
    
    Return their respective ages now as [humanYears,catYears,dogYears]
    
    NOTES:
    humanYears >= 1
    humanYears are whole numbers only
    
    Cat Years
    
    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that
    
    Dog Years
    
    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
    
    References
    
    http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
    http://www.slate.com/articles/newsandpolitics/explainer/2009/05/adogslife.html
    
    If you liked this Kata there is another related one here

    Link to Kata : https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
*/
var humanYearsCatYearsDogYears = function (humanYears) {
    return [
        humanYears,
        (humanYears - 1 ? 16 : 11) + 4 * humanYears,
        (humanYears - 1 ? 14 : 10) + 5 * humanYears
    ];
}
