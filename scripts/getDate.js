
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


 /* Local storage for the information section */


// 1. Initialize display element variable
   const visitDisplay = document.querySelector(".visits");

// 2. Get the stored VALUE for the numVisits-ls KEY in localStorage 
// if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
   let numVisits = Number(window.localStorage.getItem("numVisits - ls")) || 0;

// 3. Determine if this is the first visit or display the number of visits
   if (numVisits !== 0){
     visitDisplay.textContent = numVisits;
   }else{
     visitDisplay.textContent = `This is your first visit, 😍 welcome!`
   }

// 4. increment the number of visits by one.
   numVisits++;

// 5. store the new visit total into localStorage, key=numVisits-ls
   localStorage.setItem("numVisits - ls", numVisits);
    

// function toggleMenu() {
//   const mainNav = document.querySelector(".navigation");
//   mainNav.classList.toggle("responsive");
// }





