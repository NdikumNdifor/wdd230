let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Lastly Modified: ${oLastModif}`;

// function toggleMenu(){
//     const dropDown = document.querySelector(".navigation");
//     dropDown.classList.toggle("open");
// }
const hamBtn = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation");

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("open");
    mainNav.classList.toggle("open");
})


// script for the toggle switch
const changeTextAndBackground = document.querySelector("#checked");
const main = document.querySelector("main");
    
changeTextAndBackground.addEventListener("change", () => { 
    main.style.backgroundColor = changeTextAndBackground.checked === true? "#000": "#FFF"
    main.style.color = changeTextAndBackground.checked === true? "#FFF": "#000"  
});


