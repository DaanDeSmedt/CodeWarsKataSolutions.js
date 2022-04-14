/*
    Title: Name Shuffler

    Description:
    Write a function that returns a string in which firstname is swapped with last name.
    
    Kata.NameShuffler("john McClane") => "McClane john"
    name_shuffler("john McClane"); => "McClane john"
    nameShuffler('john McClane'); => "McClane john"
    name_shuffler('john McClane'); => "McClane john"
    name_shuffler('john McClane'); => "McClane john"
    name_shuffler("john McClane"); => "McClane john"
    

    Link to Kata : https://www.codewars.com/kata/559ac78160f0be07c200005a
*/
function nameShuffler(str) {
    return str
        .split(' ')
        .reverse()
        .join(' ')
}