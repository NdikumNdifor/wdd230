

// Declaring three const variables that 
// hold references to the input, button, and .list elements. 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Ja practice of local storage

let chaptersArray = getChapterList() || [];

chaptersArray.forEach( (chapter) => {
    displayList(chapter);
})

button.addEventListener("click" ,() => {
    if (input.value != "" ){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList()
        input.value = "";
        input.focus();
    }
})

// Creating a click event listener for the Add Chapter button 
// using addEventListener and an arrow function.

function displayList(item) {

    /* button.addEventListener("click", () => {
         // checking to make sure the input is not blank
         if(input.value != "") */
 
     // creating "li" and "delete button" elements
     const li = document.createElement("li");
     const deleteBtn = document.createElement("button");
     /*const span = document.createElement("span")*/
 
     // populating the li elements by applying textContent or innerHTML with the input value
     li.textContent = item;
     /*li.append(span.innerHTML = "_______________");*/
 
     // populate the button textContent with a ❌
     deleteBtn.textContent = "❌";
 
     // this references the CSS rule .delete{width:fit-content;} to size the delete button
     deleteBtn.classList.add('delete');
 
     // appending the li element with the delete button
     li.appendChild(deleteBtn);
 
     // Appending the li element to the unordered list in your HTML
     list.appendChild(li);
 
     // Adding an event listener to the delete 
     // button that removes the li element when clicked
     deleteBtn.addEventListener("click", function(){
         list.removeChild(li);
         deleteChapter(li.textContent);
         input.focus();
     });
     console.log('A good way to becoming a more efficient coder is to try and understand a code and practice by trying rather than copying and pasting.');
 }

function setChapterList(){
    localStorage.setItem("myFavBomList", JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBomList"));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}


