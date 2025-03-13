const ct = [
 
  '<img src="Ale.png" alt="Ale"></img>',
   '<img src="Marcos.png" alt="Marcos"></img>',   
  '<img src="Milton.png" alt="Milton"></img>',
  '<img src="JuanPablo.png" alt="Juan Pablo"></img>', 
  '<img src="Edu.png" alt="Eduardo"></img>',  
  "14/03/2025",
  "21/03/2025",
  "28/03/2025",
  "05/04/2025" ,
  "12/04/2025",
];
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
let day_ini = new Date(2025, 02,07,8);
let day_fin = new Date();

diff = day_fin - day_ini;
let a = Math.round(Math.floor(diff / week));

document.getElementById("index").innerHTML = ct[a+5];
document.getElementById("persona").innerHTML = ct[a];

function elegir() {
  
}
