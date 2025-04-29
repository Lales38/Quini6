const ct = [  
 '<img src="Edu.png" alt="Eduardo"></img>',  
 '<img src="Ale.png" alt="Ale"></img>',
 '<img src="Marcos.png" alt="Marcos"></img>',   
 '<img src="Milton.png" alt="Milton"></img>',
 '<img src="JuanPablo.png" alt="Juan Pablo"></img>',
  "09/05/2025",
  "16/05/2025",
  "23/05/2025",
  "30/05/2025" ,
  "06/006/2025",
];
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
let day_ini = new Date(2025, 04,02,8);
let day_fin = new Date();

diff = day_fin - day_ini;
let a = Math.round(Math.floor(diff / week));

document.getElementById("index").innerHTML = ct[a+5];
document.getElementById("persona").innerHTML = ct[a];

function elegir() {
  
}
