const wind = document.querySelector(".windchill-value");
const btn = document.querySelector("button");
function  CalculateWindchill() {
    let T = parseFloat(prompt("Please enter the current temperature: "));
    let v = parseFloat(prompt("Please enter the wind speed: "));
    if (T <= 50 && v > 3.0){
        let windchill = 35.74 + 0.6215*T - 35.75 * v**0.16 + 0.4275 * T * v**0.16;
        return windchill.toFixed(2);
    }
    else{
        return "N/A";
    }
};
btn.addEventListener("click", () => {
    wind.innerHTML = CalculateWindchill();
})
