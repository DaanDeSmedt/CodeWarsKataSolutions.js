/*
    Title: Regular Ball Super Ball

    Description:
    Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
    
    If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
    
    ball1 = new Ball();
    ball2 = new Ball("super");
    
    ball1.ballType     //=> "regular"
    ball2.ballType     //=> "super"
    ball1 = new Ball()
    ball2 = new Ball("super")
    ball1.ballType #=> "regular"
    ball2.ballType #=> "super"
    ball1 = Ball.new
    ball2 = Ball.new "super"
    ball1.ball_type  #=> "regular"
    ball2.ball_type  #=> "super"
    ball1 = Ball()
    ball2 = Ball("super")
    ball1.ball_type  #=> "regular"
    ball2.ball_type  #=> "super"
    ball1 = new Ball();
    ball2 = new Ball("super");
    
    ball1.ballType     //=> "regular"
    ball2.ballType     //=> "super"
    `

    Link to Kata : https://www.codewars.com/kata/53f0f358b9cb376eca001079
*/
var Ball = function (ballType = "regular") {
    this.ballType = ballType
};