
const baseURL = "https://ndikumndifor.github.io/wdd230/";
const linksURL = "https://ndikumndifor.github.io/wdd230/data/links.json";

// const sect = document.getElementById("section");
const weeklyLessons = document.querySelector("#courseLinks");

// const ul = document.createElement("ul")

async function getlinksData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}
getlinksData();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let li = document.createElement("li");
        li.textContent = `Week ${week.lesson}:`;

        let linksAarray = week.links;
        linksAarray.forEach((activity)=>{
            let link = document.createElement("a");
            link.setAttribute("href", `${activity.url}`);
            link.textContent = `${activity.title}`;
            li.appendChild(link);
        })
        // courseLinks.appendChild(li);
        weeklyLessons.appendChild(li);
        // sect.appendChild(ul);     
    })
}


// const displayLinks = (weeks) => {
//     if (weeks && Array.isArray(weeks)) {
//         weeks.forEach((week) => {
//             let li = document.createElement("li");
//             li.innerHTML = `Week ${week.lesson}:`;
//             let linksArray = week.links;
//             if (linksArray && Array.isArray(linksArray)) {
//                 linksArray.forEach((activity) => {
//                     let link = document.createElement("a");
//                     link.setAttribute("href", `${activity.url}`);
//                     link.innerHTML = `${activity.title}`;
//                     li.appendChild(link);
//                 });
//             } else {
//                 console.error('Links array is not defined or not an array');
//             }
//             // Append the list item to wherever you want it to appear in the DOM
//             // For example:
//             document.getElementById("yourListId").appendChild(li);
//         });
// }
// }
 

    