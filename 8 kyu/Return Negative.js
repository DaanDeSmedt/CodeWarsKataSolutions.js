/*
    Title: Return Negative

    Description:
    In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
    
    Examples
    
    Input:  1  =>  Output: -1
    Input: -5  =>  Output: -5
    Input:  0  =>  Output:  0
    makeNegative(1);  // return -1
    makeNegative(-5); // return -5
    makeNegative(0);  // return 0
    makeNegative(1);  // return -1
    makeNegative(-5); // return -5
    makeNegative(0);  // return 0
    Kata.MakeNegative(1);  // return -1
    Kata.MakeNegative(-5); // return -5
    Kata.MakeNegative(0);  // return 0
    Kata.makeNegative(1);  // return -1
    Kata.makeNegative(-5); // return -5
    Kata.makeNegative(0);  // return 0
    make_negative(1);  # return -1
    make_negative(-5); # return -5
    make_negative(0);  # return 0
    make_negative(1);  # return -1
    make_negative(-5); # return -5
    make_negative(0);  # return 0
    make_negative(1);  # return -1
    make_negative(-5); # return -5
    make_negative(0);  # return 0
    makeNegative(1);    // return -1
    makeNegative(-5);   // return -5
    makeNegative(0);    // return 0
    makeNegative(0.12); // return -0.12
    makeNegative(1);    // return -1
    makeNegative(-5);   // return -5
    makeNegative(0);    // return 0
    makeNegative(0.12); // return -0.12
    makeNegative(1);  // return -1
    makeNegative(-5); // return -5
    makeNegative(0);  // return 0
    makeNegative(1);  // return -1
    makeNegative(-5); // return -5
    makeNegative(0);  // return 0
    makeNegative    1 -- return -1
    makeNegative (-5) -- return -5
    makeNegative    0 -- return 0
    makeNegative 0.12 -- return -0.12
    makeNegative(1);  # return -1
    makeNegative(-5); # return -5
    makeNegative(0);  # return 0
    makeNegative 1    # return -1
    makeNegative -5   # return -5
    makeNegative 0    # return 0
    make_negative 1    # return -1
    make_negative -5   # return -5
    make_negative 0    # return 0
    MakeNegative(1)    // return -1
    MakeNegative(-5)   // return -5
    MakeNegative(0)    // return 0
    Kata.makenegative(1)  # return -1
    Kata.makenegative(-5) # return -5
    Kata.makenegative(0)  # return 0
    Kata().makeNegative(1)  // return -1
    Kata().makeNegative(-5) // return -5
    Kata().makeNegative(0)  // return 0
    make_negative(1);    // return -1
    make_negative(-5);   // return -5
    make_negative(0);    // return 0
    Kata.makeNegative(1)    // return -1
    Kata.makeNegative(-5)   // return -5
    Kata.makeNegative(0)    // return 0
    makeNegative(1)    // return -1
    makeNegative(-5)   // return -5
    makeNegative(0)    // return 0
    makeNegative(0.12) // return -0.12
    (make-negative 1)    ; -1
    (make-negative -5)   ; -5
    (make-negative 0)    ; 0
    (make-negative 0.12) ; -0.12
    Negative.makeNegative(1)  // return -1
    Negative.makeNegative(-5) // return -5
    Negative.makeNegative(0)  // return 0
    Kata::make_negative(1)     # return -1
    Kata::make_negative(-5)    # return -5
    Kata::make_negative(0)     # return 0
    Kata::make_negative(0.12); # return -0.12
            MAKE-NEGATIVE 1
          RESULT = -1
            MAKE-NEGATIVE -5
          RESULT = -5
            MAKE-NEGATIVE 0
          RESULT = 0
    
    Notes
    
    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
    

    Link to Kata : https://www.codewars.com/kata/55685cd7ad70877c23000102
*/
function makeNegative(num) {
  return Math.sign(num) === 1 ? -num : num
}