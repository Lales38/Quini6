const ct = [
  '<img src="Marcos.png" alt="Marcos"></img>', 
  '<img src="Javier.png" alt="Javier"></img>',
  '<img src="Milton.png" alt="Milton"></img>',
  '<img src="JuanPablo.png" alt="Juan Pablo"></img>', 
  '<img src="Edu.png" alt="Eduardo"></img>',
  '<img src="Ale.png" alt="Ale"></img>',
  "31/01/2025",
  "07/02/2025",
  "14/02/2025",
  "21/02/2025" ,
  "28/02/2025",
  "07/03/2025"
];
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
let day_ini = new Date(2025, 00,10,8);
let day_fin = new Date();

diff = day_fin - day_ini;
let a = Math.round(Math.floor(diff / week));

document.getElementById("index").innerHTML = ct[a+6];
document.getElementById("persona").innerHTML = ct[a];

function elegir() {
  
}
