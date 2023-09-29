
let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Lastly Modified: ${oLastModif}`;

document.getElementById("lastModified").style.color = "#FFFFFF";


/* JavaScript codes for responsive hamburger menu */ 

 const mainNav = document.querySelector(".navigation");
 const hamBtn = document.querySelector("#hamburgerBtn");

 hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("open");
    mainNav.classList.toggle("open");
 });
    

// function toggleMenu() {
//   const mainNav = document.querySelector(".navigation");
//   mainNav.classList.toggle("responsive");
// }
