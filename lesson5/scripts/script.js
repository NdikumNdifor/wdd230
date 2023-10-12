// Declaring three const variables that 
// hold references to the input, button, and .list elements. 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Creating a click event listener for the Add Chapter button 
// using addEventListener and an arrow function.
button.addEventListener("click", () => {
    // checking to make sure the input is not blank
    if(input.value != "") {

        // creating "li" and "delete button" elements
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        /*const span = document.createElement("span")*/

        // populating the li elements by applying textContent or innerHTML with the input value
        li.textContent = input.value;
        /*li.append(span.innerHTML = "_______________");*/

        // populate the button textContent with a ❌
        deleteBtn.textContent = "❌";

        // appending the li element with the delete button
        li.appendChild(deleteBtn);

        // Appending the li element to the unordered list in your HTML
        list.appendChild(li);

        // Adding an event listener to the delete 
        // button that removes the li element when clicked
        deleteBtn.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();
        });
        // Focuses the bar in the input field calling attention on where to type
        // and clearing the input field.
        input.focus();
        input.value = '';
    
    }
    else{
         input.focus();
    }   
});

