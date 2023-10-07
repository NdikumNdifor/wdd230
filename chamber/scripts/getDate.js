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