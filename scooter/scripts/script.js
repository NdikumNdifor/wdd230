/*------------ JavaScript For Responsive Hamburger Menu ---------------*/
const hamBtn = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation1");

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("open");
    mainNav.classList.toggle("open");
})


/*------------ JS For Current and forecast Weather ------------------*/

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=20.42&lon=-86.92&appid=226f1ff0656103530b59ff05b32b8349&units=metric"

// Referencing elements of the dom
const currentDate = document.querySelector("#date");
const currentIcon = document.querySelector("#icon");
const CurrentTemp = document.querySelector("#temperature");
const currentMain = document.querySelector("#main")
const CurrentDesc = document.querySelector("#description")

const forecastDate = document.querySelector("#date1");
const forecastIcon = document.querySelector("#icon1");
const forecastTemp = document.querySelector("#temperature1");
const forecastMain = document.querySelector("#main1");
const forecastDesc = document.querySelector("#description1");

// An async function that uses fetch api method to retrieve data
// and parses it to a json format 
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


// A function that displays the current weather retrieved from
// the returned json
function displayCurrentResults(data) {

   let dt = new Date(data.current.dt * 1000).toDateString();
   currentDate.innerHTML = `${dt}`;

   const iconsrc = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
   currentIcon.setAttribute("src",`${iconsrc}`);
   currentIcon.setAttribute("alt", "Current Weather icon");

   temperature.innerHTML = `Temperature: ${data.current.temp}&deg;C`;
   currentMain.innerHTML = `Condition: ${data.current.weather[0].main}`;

   let desc = data.current.weather[0].description;
   description.textContent = `Details: ${desc}`;
}

// A function that returns a 1 day weather forecast
function displayForecastResults(data) {
   for (let i = 1; i < 2; i++){
      
      let dtfore = new Date(data.daily[i].dt * 1000).toDateString();
      // let sr = new Date(data.sunrise * 1000);
      // let ss = new Date(data.sunset * 1000);

      forecastDate.innerHTML = `${dtfore}`;

      let iconsrc = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
      forecastIcon.setAttribute("src",`${iconsrc}`);
      forecastIcon.setAttribute("alt", " Forecast Weather icon");

      forecastTemp.innerHTML = `Temperature: ${data.daily[i].temp.day}&deg;C`;
      forecastMain.innerHTML = `Condition: ${data.daily[i].weather[0].main}`; 
      forecastDesc.innerHTML = `Details: ${data.daily[i].weather[0].description}`;

   }
}

/********** JavaScrip For Current Date and Time ************/

let oLastModif = new Date(document.lastModified);
document.getElementById("lastlyModified").innerHTML = `Lastly Modified: ${oLastModif}`;


/************** JavaSript For Table ***************/

const path = "../../scooter/data/prices.json";

async function populateTableBody(url, table) {
   const tableBody = table.querySelector("tbody");
   const response = await fetch(url);
   const { prices } = await response.json();

   // Clear table
   tableBody.innerHTML = "";

   // Populating the body
   for (const row of prices) {
      const rowElement = document.createElement("tr");

      for (const cellText of row) {
         const cellElement = document.createElement("td");

         cellElement.textContent = cellText;

         rowElement.appendChild(cellElement); 
      }

      tableBody.appendChild(rowElement);
   }
}

populateTableBody(path, document.querySelector("table"));