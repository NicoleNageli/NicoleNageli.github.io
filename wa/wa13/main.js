// setup canvas

//variable declarations
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//setting width and height of canvas to match the screen
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
//math.floor rounds down so no decimals
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
//console.log("loaded properly");

//using a class for ball, can call over and over, each time we call, 
//it's a new iteration of the thing: 25x = 25 balls
class Ball {
    //x & y are coordinates
    //vel is velocity
    constructor(x,y,velX,velY,color,size){ //passes info into the class
        //makes a new object, initializes a ball
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;
        this.color=color;
        this.size=size;
    }

    //using info in a draw function
    draw(){
        //ctx = context, 2D
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
        //0 and 2*Math.PI = means drawing in radians from 0 to 2pi
    }

    update(){
        //4 if statements
        if((this.x + this.size)>=width){ //are we off the far right edge of the screen?
            //if we are: take velocity and make it negative
            this.velX = -(this.velX);
        }
        if((this.x - this.size) <= 0) { //left
            this.velX = -(this.velX);
        }

        if((this.x + this.size) >= height){ //bottom of screen
            this.velY = -(this.velY);
        }
        if((this.x - this.size) <= 0) { //top of screen
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
       // this.color = randomRGB();
    }

    collisionDetect(){
        for(const ball of balls){
            if (this !== ball){
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx*dx + dy*dy);

                if(distance < this.size +ball.size){ //when two balls overlap, flash diff colors
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

//makin a new ball (can do in console)
//new Ball() calls the constructor, so pass in parenthesis
const testBall = new Ball(50,100,4,4,"blue",10);
testBall.draw();
const testBall2 = new Ball(100,100,4,4,"red",20);
testBall2.draw();
const testBall3 = new Ball(10,10,10,10,"green",50);
testBall3.draw();
//use for loop to make mo' ballz

//list
const balls = [];
while (balls.length < 10){
    const size = random(10,100);
    const ball = new Ball (
        //0+size = min #, width-size = max #
        random(0+size, width-size),
        random(0+size, height-size),
        random(-3,3), //random velocity in x and y direction between -7 & 7
        random(-2,2),
        randomRGB(),
        size, 
    );
    //push to ball array
    balls.push(ball);
}
//console.log(balls)

function loop() {
    //background
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,width,height);
    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }
    requestAnimationFrame(loop);
}
loop();