let ball = function(ballType) {
    this.ballType = ballType || 'regular';
  };
  
  let ballSuper = function(ballType) {
    this.ballType = ballType || 'super';
  };


 if (ball == true) {
       this.ballType = 'regular';
    }
else if (ballSuper == false) {
    this.ballType = 'super';
 } 
  else{console.log('undefine')}

  let ball1 = new ball("regular");
  let ball2 = new ballSuper("super");
  