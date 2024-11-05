const ct = [
  '<img src="JuanPablo.png" alt="Juan Pablo"></img>',
  '<img src="Andres.png" alt="Andrés"></img>', 
  '<img src="Edu.png" alt="Eduardo"></img>',
  '<img src="Marcos.png" alt="Marcos"></img>',
  '<img src="Ale.png" alt="Ale"></img>',
  '<img src="Javier.png" alt="Javier"></img>',
  '<img src="Milton.png" alt="Milton"></img>',
  "08/11/2024",
  "15/11/2024",
  "22/11/2024",
  "29/11/2024",
  "06/12/2024",
  "13/12/2024",
  "20/12/2024",
  "27/12/2024"
];
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
let day_ini = new Date(2024, 10,1,8);
let day_fin = new Date();

diff = day_fin - day_ini;
let a = Math.round(Math.floor(diff / week));

document.getElementById("index").innerHTML = ct[a+7];
document.getElementById("persona").innerHTML = ct[a];

function elegir() {
  
}
