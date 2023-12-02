/*------------ JavaScript For Responsive Hamburger Menu ---------------*/
const hamBtn = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation1");

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("open");
    mainNav.classList.toggle("open");
})

