
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

if (localStorage.getItem("lastVisitDate") == 0 || null) {
    msSinceVisit = 0;
}
else {
    lastVisit = JSON.parse(localStorage.getItem("lastVisitDate"));
    msSinceVisit = currDateInMs - lastVisit;
}

//display one of three possible messages based on how many times they have visited

let displayMessage = document.querySelector(".local-storage")

if (msSinceVisit < 600 ) {
	displayMessage.textContent = "Welcome! Let us know if you have any questions.";
} 
else if (msSinceVisit < 24 * 3600000) {
    displayMessage.textContent = "Back so soon! Awesome!";
}
else {
    // calculate days since last visit
    let numOfDaysSinceVisited = Math.round(msSinceVisit / 84600000);
    if (numOfDaysSinceVisited < 2) {
        displayMessage.textContent = `You last visited 1 day ago.`;
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

// const baseURL = "https://ndikumndifor.github.io/wdd230/";
// const listURL = "https://ndikumndifor.github.io/wdd230/chamber/data/members.json";

// // const listURL = "data/members.json";
// let all = document.querySelector(".main");
// all.style.backgroundColor = "blue";
// let para = document.createElement("p")
// all.append(para);

// const cards = document.getElementById("article");

// async function getMembersData() {
//     const response = await fetch(listURL);
//     const data = await response.json();
//     console.log(data.members);
//     // displayMembers(data.members);
// }
// getMembersData();

// const displayMembers =  (members) => {
//     members.forEach((member) => {
        
//         let card = document.createElement("section");
//         let logo = document.createElement("img");
//         let h3 = document.createElement("h3");
//         let address = document.createElement("p");
//         let telephone = document.createElement("p")
//         let level = document.createElement("p")

//         logo.setAttribute("src", member.iconUrl);
//         logo.setAttribute("loading", "lazy");
//         logo.setAttribute("alt", `Logo of ${member.name} company`);
//         logo.setAttribute("width", "140");
//         logo.setAttribute("height", "auto");

//         h3.textContent = `${member.name}`;
//         address.textContent = `${member.address}`;
//         telephone.textContent = `${member.phone}`;
//         level.textContent = `${member.membershipLevel}`

//         card.appendChild(logo),
//         card.appendChild(h3);
//         card.appendChild(address);
//         card.appendChild(telephone);
//         card.appendChild(level);

//         // card.appendChild(logo),
//         // card.appendChild(`${member.name}`);
//         // card.appendChild(`${member.address}`);
//         // card.appendChild(`${member.phone}`);
//         // card.appendChild(`${member.membershipLevel}`);

//         cards.appendChild(card);
        
//     })
    
// }

/*--------------- Js for grid ----------------*/
// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
// 	// example using arrow function
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
// 	display.classList.add("list");
// 	display.classList.remove("grid");
// }



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



