var pos = document.documentElement;
pos.addEventListener('mousemove', e=>
{
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})

const buttons = document.querySelectorAll('button');
const width = window.innerWidth || document.documentElement.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight;
const body = document.querySelector('body');

let str = "";

function animate(){
  buttons.forEach(button => {
    let x = parseInt(button.getAttribute('xpos'));
    let y = parseInt(button.getAttribute('ypos'));
    let xVel = parseInt(button.getAttribute('xvel'));
    let yVel = parseInt(button.getAttribute('yvel'));
    if(x > width || x < 0){
      xVel = -xVel;
      button.setAttribute("xvel", xVel);
    } 
    if(y > height || y < 0){
      yVel = -yVel;
      button.setAttribute("yvel", yVel);
    }
    x += xVel;
    y += yVel;
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    button.setAttribute("xpos", x);
    button.setAttribute("ypos", y);
  });
  requestAnimationFrame(animate);
}
animate();

body.addEventListener('click', (e) => {
  //console.log(e.target.id);
  if(e.target.id !== 'container'){
    str += e.target.id;
  } 
  if(e.target.id == 'clear'){
    str = "";
    p.textContent = str;
  }
  //console.log(str);
  //print out string phone number display
 document.getElementById("phoneNumber").innerHTML = `Your phone number: ${str}`;
 

 if (str.length == 10){
   //submit button but do we NEED that? how bout an alert?
   alert("The phone number you entered was "+ str + 
   ". Hopefully that's right. If not, whateva, find that pesky clear button & try again! Better luck next time >:)");
 }
});
 
  























/*
//button time bb
const button1 = document.getElementById('button');
//const buttons = document.querySelectorAll('.button');
   let x = 0;
   let y = 0;
   let xSpeed = 2;
   let ySpeed = 2;
function animate() {
   x += xSpeed;
   y += ySpeed;
   if (x + 50 > window.innerWidth || x < 0) {
      xSpeed = -xSpeed;
   }
   if (y + 50 > window.innerHeight || y < 0) {
      ySpeed = -ySpeed;
   }
   button.style.left = x + "px";
   button.style.top = y + "px";
   requestAnimationFrame(animate);
}
animate(); 
           
button.addEventListener('click', () => alert('button clicked'))

let phoneNumber='';
let result='';
function incrementString(phoneNumber){
   if (result.length === 3){
      result+= '-';
   }
   else {
      result+=phoneNumber;
   }
}


//combine bottom two functions? to display phone number
   function storeVar(el)
      {
         var amount = el.getAttribute('value');
         console.log(amount);
      }

function display(){
   //should 'add' values next to each other & display
   document.getElementById("result").value += val 
}
function myFunction(event) { 
   if (event.key == '0' || event.key == '1' 
       || event.key == '2' || event.key == '3' 
       || event.key == '4' || event.key == '5' 
       || event.key == '6' || event.key == '7' 
       || event.key == '8' || event.key == '9' 
       || event.key == '+' || event.key == '-' 
       || event.key == '*' || event.key == '/') 
       document.getElementById("result").value += event.key; 
}
// Function that clear the display 
function clr() { 
   document.getElementById("result").value = "" 
} 
/* this dont work yetttttt ahhhh
      function dis(val) { 
         document.getElementById("result").value += val 
     } 

function myFunction(event) { 
         if (event.key == '0' || event.key == '1' 
             || event.key == '2' || event.key == '3' 
             || event.key == '4' || event.key == '5' 
             || event.key == '6' || event.key == '7' 
             || event.key == '8' || event.key == '9' 
             || event.key == '+' || event.key == '-' 
             || event.key == '*' || event.key == '/') 
             document.getElementById("result").value += event.key; 
}
// Function that clear the display 
     function clr() { 
         document.getElementById("result").value = "" 
     } 
*/



   //now to add numbers to phone number with 10 digits (& display on screen)
   //also for each button -- each button should move and be clicked
   /* make a class called button to call when making a new button, pass in
    what number the ball should display and connect to 
    
    then if length of phone number is 10, put a submit
    but if length is bigger than 10, error message and clear number
    */





//add collision? nah too much work
//___________________ I DID ITTTT disregard below _________________________________
//add second event listener?
/*
button.addEventListener('mouseover',  () => {
   button.style.left = Math.floor(Math.random() * (window.innerWidth +1)) + 'px';
})
/*
button.addEventListener('mousemove',  () => {
   let x = 0;
   let y = 0;
   let xSpeed = 5;
   let ySpeed = 5;
   function animate() {
   x += xSpeed;
   y += ySpeed;
   if (x + 50 > window.innerWidth || x < 0) {
      xSpeed = -xSpeed;
   }
   if (y + 50 > window.innerHeight || y < 0) {
      ySpeed = -ySpeed;
   }
   button.style.left = x + "px";
   button.style.top = y + "px";
   requestAnimationFrame(animate);
}
animate();
})
*/

//when the mouse moves, the button should move to a random place, how do i do that
/*? https://www.geeksforgeeks.org/how-to-build-a-bounce-ball-with-html-and-javascript/
on mouse move.... transform? animate?

css fly across screen: https://support.cargo.site/Make-an-Image-Fly-Across-the-Screen
https://www.tutorialspoint.com/how-to-build-a-bounce-ball-with-html-and-javascript: 
            let x = 0;
            let y = 0;
            let xSpeed = 5;
            let ySpeed = 5;
            function animate() {
            x += xSpeed;
            y += ySpeed;
            if (x + 50 > window.innerWidth || x < 0) {
               xSpeed = -xSpeed;
            }
            if (y + 50 > window.innerHeight || y < 0) {
               ySpeed = -ySpeed;
            }
            button.style.left = x + "px";
            button.style.top = y + "px";
            requestAnimationFrame(animate);
         }
        animate();
*/



/*https://javascript.plainenglish.io/create-3d-css-buttons-which-move-as-you-mouse-over-8b8b53f34fd0
Applying our function to each button
To apply all our function to each button, we simply iterate through them all with forEach. 
add JavaScript events to multiple elements.
*/
/*
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

button.addEventListener('mousemove', () => {
    //console.log('ya moved');
    button.style.left = Math.floor(Math.random() * maxWidth + 1)+'px';
})
*/