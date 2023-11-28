/*----------------- Current and Forecast ----------------*/

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=4.03&lon=11.51&appid=226f1ff0656103530b59ff05b32b8349&units=metric"

const currentDate = document.querySelector("#date");
const currentIcon = document.querySelector("#icon");
const CurrentTemp = document.querySelector("#temperature");
const currentMain = document.querySelector("#main")
const CurrentDesc = document.querySelector("#description")

const displayPoint = document.querySelector(".forecasted");

async function apiFetch() {
   try{
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
         displayCurrentResults(data);
         displayForecastResults(data);
      }else {
         throw Error(await response.text());
      }

   } catch(error){
      console.log(error);
   }
}
apiFetch();

function displayCurrentResults(data) {

   let dt = new Date(data.current.dt * 1000).toDateString();
   currentDate.innerHTML = `${dt}`;

   const iconsrc = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
   currentIcon.setAttribute("src",`${iconsrc}`);
   currentIcon.setAttribute("alt", "Weather icon");

   temperature.innerHTML = `Temperature: ${data.current.temp}&deg;C`;
   currentMain.innerHTML = `Condition: ${data.current.weather[0].main}`;

   let desc = data.current.weather[0].description;
   description.textContent = `Details: ${desc}`;
}

function displayForecastResults(data) {
   for (let i = 1; i < 4; i++){
      const card = document.createElement("section")
      const foreDate = document.createElement("h3");
      const foreIcon = document.createElement("img");
      const foreTemp = document.createElement("p");
      const foreDesc = document.createElement("p");
      const foreMain = document.createElement("p");
      let dtfore = new Date(data.daily[i].dt * 1000).toDateString();
      // let sr = new Date(data.sunrise * 1000);
      // let ss = new Date(data.sunset * 1000);

      foreDate.innerHTML = `${dtfore}`;

      let iconsrc = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
      foreIcon.setAttribute("src",`${iconsrc}`);
      foreIcon.setAttribute("alt", "Weather icon");

      foreTemp.innerHTML = `Temperature: ${data.daily[i].temp.day}&deg;C`;
      foreMain.innerHTML = `Condition: ${data.daily[i].weather[0].main}`; 
      foreDesc.innerHTML = `Details: ${data.daily[i].weather[0].description}`;

      card.appendChild(foreDate);
      card.appendChild(foreIcon);
      card.appendChild(foreTemp);
      card.appendChild(foreMain);
      card.appendChild(foreDesc);

      displayPoint.appendChild(card)
      
   }
}

/*--------------- Tracking the Last Modified Date --------------*/
let oLastModif = new Date(document.lastModified).toDateString();
document.getElementById("lastModified").innerHTML = `Lastly Modified: ${oLastModif}`;

/*---------------- JS for Toglle switch to modify background ----------------*/

const changeTextAndBackground = document.querySelector("#checked");
const main = document.querySelector("main");
    
changeTextAndBackground.addEventListener("change", () => { 
    main.style.backgroundColor = changeTextAndBackground.checked === true? "#000": "#FFF"
    main.style.color = changeTextAndBackground.checked === true? "#FFF": "#000"  
});


const hamBtn = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation");

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("open");
    mainNav.classList.toggle("open");
})


const baseURL = "https://ndikumndifor.github.io/wdd230/";
const listURL = "https://ndikumndifor.github.io/wdd230/chamber/data/members.json";

const spotlightDisplay = document.querySelector("#first");

async function getMembersData() {
   const response = await fetch(listURL);
   const data = await response.json();
   getGoldOrSilverMember(data);
}
getMembersData();


function getGoldOrSilverMember(data) {
   let arr = [];
   for (let i = 0; i < 7; i++){
      let goldOrSilver = `${data.members[i].membershipLevel}`;
      if(goldOrSilver == "Gold" || goldOrSilver == "Silver"){
         let memberwithGoldOrSilver = `${goldOrSilver}`;
         arr.push(memberwithGoldOrSilver);
   }
   let randomPick = arr[(Math.floor(Math.random()* (arr.length)))];
   let heading4 = document.createElement("h4");
   heading4.innerHTML = `${randomPick}`;
   spotlightDisplay.appendChild(heading4);
 }
}
