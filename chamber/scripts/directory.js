
const baseURL = "https://ndikumndifor.github.io/wdd230/";
const listURL = "https://ndikumndifor.github.io/wdd230/chamber/data/members.json";


const cards = document.getElementById("article");

async function getMembersData() {
    const response = await fetch(listURL);
    const data = await response.json();
    // console.log(data.members);
    displayMembers(data.members);
}
getMembersData();

const displayMembers =  (members) => {
    members.forEach((member) => {
        
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let h3 = document.createElement("h3");
        let address = document.createElement("p");
        let telephone = document.createElement("p");
        let level = document.createElement("p");
        let link = document.createElement("a");

        logo.setAttribute("src", member.iconUrl);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("alt", `Logo of ${member.name} company`);
        logo.setAttribute("width", "140");
        logo.setAttribute("height", "20");

        link.setAttribute("href", `${member.website}`);
        link.setAttribute("target", "_blank")
    

        h3.innerHTML = `${member.name}`;
        address.innerHTML = `${member.address}`;
        telephone.innerHTML = `${member.phone}`;
        level.innerHTML = `${member.membershipLevel}`;
        link.textContent = `${member.website}`;

        card.appendChild(logo);
        card.appendChild(h3);
        card.appendChild(address);
        card.appendChild(telephone);
        card.appendChild(level);
        card.appendChild(link);

        cards.appendChild(card);
 
    })
    
}


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

