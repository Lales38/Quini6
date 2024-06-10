const persona = [
  "Iommi",
  "Parmigiani",
  "Bangert",
  "Salvatierra",
  "Nievas",
  "Salerno",
  "Ferrieri",
  "Otero",
];
const ct = [
  '<img src="JuanPablo.png" alt="Juan Pablo"></img>',
  '<img src="Andres.png" alt="Andrés"></img>',
  '<img src="Marcos.png" alt="Marcos"></img>',
  '<img src="Walter.png" alt="Walter"></img>',
  '<img src="Eduardo.png" alt="Eduardo"></img>',
  '<img src="Ale.png" alt="Ale"></img>',
  '<img src="Milton.png" alt="Milton"></img>',
  '<img src="Javier.png" alt="Javier"></img>',
];

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
let day_ini = new Date(2024, 3, 19, 8, 0, 0, 0);
let day_fin = new Date();

diff = day_fin - day_ini;
let a = Math.round(Math.floor(diff / week));
let individuo = persona[a - 1];
const usaDateFin = new Intl.DateTimeFormat("es-cl").format(day_fin);

document.getElementById("persona").innerHTML = people;
document.getElementById("fecha").innerHTML = usaDateFin;
