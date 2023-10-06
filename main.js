const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

let arrayImages = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */

/* Looping through images */

for(let i = 0; i < arrayImages.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${arrayImages[i]}`);
    newImage.setAttribute('alt', `./images/${arrayImages[i]}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    } )
}

function setImage(src) {

}

/* Wiring up the Darken/Lighten button */
