//test if js linked by putting
console.log("test");
//then check live website ctrl+shift+i consolue and look for test

const x = 1;
const y = 2;//const val neva gonna change

//conditional statement
if (x === y) {
    console.log("success");
    
} else {
    console.log("fail");
}


//loops

const btn = document.querySelector("button"); //makes = to button
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //context flat surface

//tells size
document.addEventListener("DOMContentLoaded"/*has page loaded?*/, () => {
    canvas.width =document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

//gives pseudo random number
function random(number){
    return Math.floor/*rounds down number to nearest integer*/(Math.random() * number/*generates random number*/); 
}
//TEST console.log(random(2));

function random2(number){
    return (Math.random() * number/*generates random number*/); 
}

//function definition
function draw(){
    //console.log("test if draw worky worky");
    //canvas is element on screen so make a thing for it under button ^

    //clear canvas
    ctx.clearRect(0,0, canvas.width, canvas.height/*from origin to canvas width and height*/);
    //for loop, as long as i isnt bigger than 100, we run and then add one
    for(let i = 0; i<10000; i++){ //running loop 100 times
        //start with beginPath
        ctx.beginPath();
        //ctx.fillStyle = "rgba(23,138,.5)";//background color
        let red = random(255);
        let blue = random(255);
        let yellow = random(255);
        let alpha = random2(1);
        let color = "rgba("+red+", "+blue+","+yellow+","+alpha+")"
        ctx.fillStyle = color;
        //draw circle
        ctx.arc (
            random(canvas.width), 
            random(canvas.height)/*where to put center of circle*/, 
            random(50), 0, 2 * Math.PI, /*0 radians to 2pi radians = 360 degrees = drawing a circle*/
        )
        ctx.fill();

    }
    
}

btn.addEventListener("click", draw); //when click, draw