const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
var altDict = {
    'pic1.jpg': "ghost shark",
    'pic2.jpg': "frilled shark",
    'pic3.jpg': "vampire squid",
    'pic4.jpg': "barreleye fish",
    'pic5.jpg': "deepstaria jelly",
}
/* Looping through images */
    for(img of imgArray)
    {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', imgArray);
        newImage.setAttribute('alt', altDict);
        thumbBar.appendChild(newImage);
        //eventListener
        newImage.addEventListener("click", () => {
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;
        }         
        )
    }
/* Wiring up the Darken/Lighten button */
//if else statement on click, change class and button

btn.addEventListener("click", () => {
    if(btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light");
btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        
    }
    else {
        btn.setAttribute("light", Darken);
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
                overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
