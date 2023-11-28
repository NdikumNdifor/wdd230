/*----------------- SCRIPT FOR DATE AND HAMBURGER MENU -------------*/
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


/* ----------------- SCRIPT FOR TOOGLE SWITCH ----------------- */

const changeTextAndBackground = document.querySelector("#checked");
const main = document.querySelector("main");
    
changeTextAndBackground.addEventListener("change", () => { 
    main.style.backgroundColor = changeTextAndBackground.checked === true? "#000": "#FFF"
    main.style.color = changeTextAndBackground.checked === true? "#FFF": "#000"  
});


/* -------------- SCRIPT FOR DISCOVER PAGE --------------------*/

// Inserting the last modified date at the footer of the discover page
let oLastModif1 = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Lastly Modified: ${oLastModif1}`;

// get the date right now in ms

const theDateToday = new Date();
const currDateInMs = Date.now();
let lastVisit = 0;
let msSinceVisit = 0;

// calculate ms since last visit

if (localStorage.getItem("lastVisitDate") === 0 || null) {
    msSinceVisit = 0;
}
else {
    lastVisit = JSON.parse(localStorage.getItem("lastVisitDate"));
    msSinceVisit = currDateInMs - lastVisit;
}

//display one of three possible messages based on how many times they have visited

let displayMessage = document.querySelector(".local-storage");

if (msSinceVisit < 600 ) {
	displayMessage.textContent = "Welcome! Let us know if you have any questions.";
} else if (msSinceVisit < 86400000) {
    displayMessage.textContent = "Back so soon! Awesome!";
} else {
    // calculate days since last visit
    let numOfDaysSinceVisited = Math.round(msSinceVisit / 84600000);
    if (numOfDaysSinceVisited < 2) {
        displayMessage.textContent = "You last visited 1 day ago.";
    }
    else {
        displayMessage.textContent = `You last visited ${numOfDaysSinceVisited} days ago.`;
    }
}

// set the local storage 'last visit' to current date 
localStorage.setItem("lastVisitDate", JSON.stringify(currDateInMs));

/*----------------- Adding Date During form Submission ----------------*/
const date = document.querySelector("#timestamp");

const currentDate = new Date();
// timestamp is the number of milliseconds since 1970:01:00:00 
const timestamp = Date.now(); 
date.value = `${timestamp}`;


/* ------------ JAVASCRIPT FOR CHAMBER OF COMMERCE'S DIRECTORY PAGE ------------- */

/*------------------- JavaScript For The Banner -------------------------*/

/*------------------- Js for current-temp --------------------*/

const icon = document.querySelector("#icon");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=4.03&lon=11.51&appid=864294a8651dccdaa0d832552417e1e7&units=imperial";

async function apiFetch() {
   try{
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        //  console.log(data)
        //  displayResults(data);
      }else {
         throw Error(await response.text());
      }

   } catch(error){
      console.log(error);
   }
}
apiFetch();

function displayResults(data) {
   temperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    icon.setAttribute("src",`${iconsrc}`);
    icon.setAttribute("alt", "Weather icon");
    description.textContent = `${desc}`;
}



