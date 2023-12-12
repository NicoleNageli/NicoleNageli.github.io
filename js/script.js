var pos = document.documentElement;
pos.addEventListener('mousemove', e=>
{
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})
//button time bb
const button = document.getElementById('button');
//if button clicked:
//button.addEventListener('click', () => alert('1 clicked'/*add code to add number to phone number here*/))
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
   button.addEventListener('click', () => alert('ball clicked'))
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



