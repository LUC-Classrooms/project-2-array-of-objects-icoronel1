/**
 * Add code for your class constructor in this file
 */
function Sprite (tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  
    this.move = function(){
      this.x += this.xSpeed
      this.y += this.ySpeed
  
      if(this.x > width || this.x < 0){
        this.xSpeed *= -1;
      }
  
      if(this.y > height || this.y < 0){
        this.ySpeed *= -1;
      }
    }
  
    this.display = function(){
      push(); // new layer
      translate(this.x, this.y) // move layer's origin point to 0,0
      strokeWeight(2) //change stroke size
      fill("pink")
      triangle( - 85, - 125, - 30, - 95, - 85, - 60) // left outer ear
      triangle(95, - 115, 40, - 80, 95, - 35) // right outer ear
      ellipse(- 50, 100, 45, 20) // left foot
      ellipse(50, 100, 45, 20) // right foot 
      fill("brown")
      triangle(- 82, - 115, - 40, - 85, - 75, - 50) // left inner ear
      triangle(90, - 105, 50, - 70, 85, - 35) // right inner ear
      fill("pink")
      ellipse(0, 0, 210) //head-body
      fill("white")
      strokeWeight(2) // change stroke size
      ellipse(- 50, - 20, 70) //left eye
      ellipse(50, 5, 70) //right eye
      fill("teal")
      ellipse(- 40, - 15, 50) // left eye pupil
      ellipse(60, 10, 50) // right eye pupil
      fill("white")
      ellipse(- 27, - 30, 10) // left eye highlight
      ellipse(70, - 8, 10) // right eye highlight
      noFill()
      arc(0, 0, 10, 10, 0, PI) //mouth
      arc(- 75, 30, 25, 55, 0, PI) // L arm
      arc(65, 50, 25, 55, 0, PI) // R arm 
      fill("pink")
      arc( 10, - 95, 85, 75, PI, TWO_PI+HALF_PI)// large hair tuff
      noFill()
      arc(10, - 70, 65, 65, 0, PI + HALF_PI)// inner hair tuff
      pop(); // dispose of layer

      //microphone
      push();
      translate(this.x + 80, this.y + 65);
      rotate(m) //rotate microphone angle
      if(mouseIsPressed){ //if moused pressed, microphone will rotate around jiggly puff
        m += .05
      } else{
        m = 0 //if not, microphone stays in hand
      }
      fill(125)
      rect(-30, -10, 55, 20) //microphone handle
      rect(15, -12, 5, 24) //microphone
      ellipse(34, 0, 29, 29) //microphone
      line(30, -13, 30, 13) //microphone
      pop();
    }
  
  }