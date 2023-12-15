const displayDay = document.querySelector(".banner");
const close = document.querySelector(".banner-close");

function displayBanner() {
    close.addEventListener("click", function() {
        this.closest(".banner").style.display = "none";
    })
}
displayBanner();
