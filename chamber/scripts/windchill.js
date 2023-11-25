

const displayDay = document.querySelector(".banner")
const close = document.querySelector(".banner-close");

const myDate = new Date();

function displayBanner() {
    let day = myDate.getDay();
    if (day == 1 || day == 2 || day == 3){
        displayDay.style.display = "block"; 
    }else {
        displayDay.style.display = "none";
    }
    close.addEventListener("click", function() {
        this.closest(".banner").style.display = "none";
    })
}
displayBanner();




