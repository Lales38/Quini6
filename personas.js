const ct = [
  '<img src="JuanPablo.png" alt="Juan Pablo"></img>',
  '<img src="Andres.png" alt="Andrés"></img>',
  '<img src="Ale.png" alt="Ale"></img>',  
  '<img src="Walter.png" alt="Walter"></img>',
  '<img src="Eduardo.png" alt="Eduardo"></img>',
  '<img src="Marcos.png" alt="Marcos"></img>',
  '<img src="Milton.png" alt="Milton"></img>',
  '<img src="Javier.png" alt="Javier"></img>',
  '26/07/2024',
  '02/08/2024',
  '09/08/2024',
  '16/08/2024',
  '23/08/2024',
  '30/08/2024',
  '06/09/2024',
  '13/09/2024'
];
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
let day_ini = new Date(2024, 6,19,8);
let day_fin = new Date();

diff = day_fin - day_ini;
let a = Math.round(Math.floor(diff / week));

document.getElementById("index").innerHTML = ct[a+8];
document.getElementById("persona").innerHTML = ct[a];

function elegir() {
  
}
