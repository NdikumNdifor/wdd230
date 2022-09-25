
// tolocalDateSting
// const todaysDate = new Date();
const options = {weekday:'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('java3').textContent = new Date().toLocaleDateString('en.US',options);
document.getElementById("java1").innerHTML = '2020';
document.getElementById("java2").innerHTML = 'Camerron';

