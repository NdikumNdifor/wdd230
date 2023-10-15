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

const changeTextAndBackground = document.querySelector(".switch");
const main = document.querySelector("main");

changeTextAndBackground.addEventListener("click", () => { 
    if (main.style.backgroundColor!= "#DDDDDD"){
        main.style.backgroundColor = "#000000";
        main.style.color = "#FFFFFF"; 
    }else{
        main.style.backgroundColor = "#FFFFFF";
        main.style.color = "#0000000";
    }
});


