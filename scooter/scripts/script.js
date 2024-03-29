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
const currentHumidity = document.querySelector("#humidity")

const forecastDate = document.querySelector("#date1");
const forecastIcon = document.querySelector("#icon1");
const forecastTemp = document.querySelector("#temperature1");
const forecastMain = document.querySelector("#main1");
const forecastDesc = document.querySelector("#description1");
const forecastHumidity = document.querySelector("#humidity1")

const maxTemp = document.querySelector(".banner-text");

// An async function that uses fetch api method to retrieve data
// and parses it to a json format 
async function apiFetch() {
   try{
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
         displayCurrentResults(data);
         displayForecastResults(data);
         displayBanner(data)
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

   currentHumidity.innerHTML = `Humidity: ${data.current.humidity}`
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

      forecastHumidity.innerHTML = `Humidity: ${data.daily[i].humidity}`

      // Displaying the max temperature of the day
      maxTemp.innerHTML = `The maximum temperature of the day will be: ${data.daily[i].temp.max}&deg;C`;

   }
}

/********** JavaScrip For Current Date and Time ************/

let oLastModif = new Date(document.lastModified);
document.getElementById("lastlyModified").innerHTML = `Lastly Modified: ${oLastModif}`;


/************** JavaSript For Table ***************/

const path = "https://ndikumndifor.github.io/wdd230/scooter/data/prices.json";

async function populateTableBody(url, table) {
   const tableHead = table.querySelector("thead");
   const tableBody = table.querySelector("tbody");
   const response = await fetch(url);
   const { headers, prices } = await response.json();

   // Clear table
   tableBody.innerHTML = "";

   // populate the second row of the head
   for (const headerText of headers){
      const headerCells = document.createElement("th");
      headerCells.textContent = headerText;
      tableHead.querySelector("#second-row-header").appendChild(headerCells)
   }

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



/*-------------- JS For Navigation Link Indicator(Wayfinding) --------------------*/
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach(link => {
   if(link.href.includes(`${activePage}`)) {
      link.classList.add("active");
   }
})


/*-------------- JS For Including Form Submission Time ------------------*/

// Creat a new date time object
let myDate = new Date();

// Get the current time in milliseconds
let timestamp = Date.now();

// Convert the time to a time string
let time = timestamp * 1000;

// Reference the timestamp input field with id "time t"
// to a variable submt time
const submitTime = document.getElementById("time");

// Fill in the input field with the current time
submitTime.value = time;

// In few lines
// document.getElementById("time").value = `${time}`;
// console.log(submitTime)


/*------------ JS To Display The Max Temperature -----------------*/

const displayDay = document.querySelector(".banner");

function displayBanner() {
    const close = document.querySelector(".banner-close");
    
    close.addEventListener("click", function() {
        this.closest(".banner").style.display = "none";
    })
}
displayBanner();
