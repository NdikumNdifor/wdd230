
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

// Inserting the last modified date at thr footer of the discover page
let oLastModif1 = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Lastly Modified: ${oLastModif1}`;


// get the date right now in ms

const theDateToday = new Date();
const currDateInMs = Date.now();
let lastVisit = 0;
let msSinceVisit = 0;

// calculate ms since last visit

if (localStorage.getItem("lastVisitDate") == null) {
    msSinceVisit = 0;
}
else {
    lastVisit = JSON.parse(localStorage.getItem("lastVisitDate"));
    msSinceVisit = currDateInMs - lastVisit;
}

//display one of three possible messages based on how many times they have visited

let displayMessage = document.querySelector(".local-storage")

if (msSinceVisit < 600) {
	displayMessage.textContent = 'Welcome! Let us know if you have any questions.';
} 
else if (msSinceVisit < (24 * 3600000)) {
    displayMessage.textContent = 'Back so soon! Awesome!';
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



/* ------------ JAVASCRIPT FOR CHAMBER OF COMMERCE'S DIRECTORY PAGE ------------- */

const baseURL = "https://ndikumndifor.github.io/wdd230/";
const membersURL = "https://ndikumndifor.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMemebersData() {
    const response = await fetch(membersURL);
    const membersData = response.json();
    displayMembersData(membersData.members);
}
displayMembersData();

const displayMembersData =  (members) => {
    members.forEach( (member) => {
        
        const card = document.createElement("section");
        const logo = document.createElement("img");

        logo.setAttribute("src", member.iconUrl);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("alt", `Logo of ${member.name} company`);
        logo.setAttribute("width", "140");
        logo.setAttribute("height", "68");

        card.appendChild(logo),
        card.appendChild(member.name);
        card.appendChild(member.address);
        card.appendChild(member.phone);
        card.appendChild(member.membershipLevel);

        cards.appendChild(card);
    })
}

/*----------------- Adding Date During form Submission ----------------*/
const date = document.querySelector("#timestamp");

const timestamp = new Date(); 
const currentDate = Date.now(); // timestamp is the number of milliseconds since 1970:01:00:00
date.value = currentDate;





