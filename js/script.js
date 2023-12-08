var pos = document.documentElement;
pos.addEventListener('mousemove', e=>
{
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})
//button time bb
const button = document.getElementById('button');
//if button clicked:
button.addEventListener('click', () => alert('number clicked'/*add code to add number to phone number here*/))

//when the mouse moves, the button should move to a random place


/*
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

button.addEventListener('mousemove', () => {
    //console.log('ya moved');
    button.style.left = Math.floor(Math.random() * maxWidth + 1)+'px';
})
*/



