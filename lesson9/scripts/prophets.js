/*----------- PRACTICING JSON AND APIs -----------------*/

const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

 async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
 } 
 getProphetsData(); 

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Creating elements to add to the div.cards element
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");

        const birthdate = document.createElement("p");
        const birthplace = document.createElement("p");
        const length = document.createElement("p");

        // Building the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`
        
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        length.textContent = `Years of Services: ${prophet.length}`;

        // Building the image portrait by setting all the relevant attributes
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `portrait of prohet ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loding", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(length)
        card.appendChild(portrait);

        // Finally, appending the created section to the div with class of card
        cards.appendChild(card);

        fullName.style.textAlign = "center";
        birthdate.style.textAlign = "center"
        birthplace.style.textAlign = "center";
        length.style.textAlign = "center"

        card.style.marginTop = "2rem";
        
    })
}