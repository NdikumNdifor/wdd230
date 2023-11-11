/*------------------ JS FOR PERSONAL INFO PART ------------------*/


const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#password1");
const message = document.querySelector(".displayMessage")

pwd2.addEventListener("focusout", checkIdentical);


function checkIdentical(){
    if (pwd1.value !== pwd2.value) {
        message.textContent = "Not A Matching Password";
        message.style.visibility = "show";
        pwd2.style.backgroundColor = "#fff0f3";
        pwd2.value = "";
        pwd2.focus();
    }else {
        displayMessage.display = "none";
        pwd2.backgroundColor = "#fff";
        pwd2.style.color = "#000";
    }
}

/*------------------ JS FOR PAGE REVIEW PART ------------------*/
const rangingvalue = document.querySelector("#rangingvalue");
const range = document.querySelector("#r")

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue(){
    rangingvalue.innerHTML = range.value; 
}


