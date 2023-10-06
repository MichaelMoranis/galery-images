const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

let arrayImages = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */

/* Looping through images */

for(const image of arrayImages) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${image}`);
    newImage.setAttribute('alt', `./images/${image}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    } )
}

btn.addEventListener("click", () => {
    const btnClass = btn.getAttribute("class");
    if(btnClass === "dark") {
       btn.setAttribute("class", "light");
       btn.textContent = "light";
       overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "dark";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})

/* Wiring up the Darken/Lighten button */
