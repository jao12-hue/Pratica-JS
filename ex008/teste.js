const prompt = require('prompt-sync')();

//Entrada de dados
const metro = parseFloat(prompt("Digite uma distância em metros: "));

//Cálculo das medidas
const km  = metro / 1000;
const hm  = metro / 100;
const dam = metro / 10;
const dm  = metro * 10;
const cm  = metro * 100;
const mm  = metro * 1000;

//Resultados
console.log(`A distância de ${metro}m corresponde a:`);
console.log(`${km.toFixed(5)}Km`);
console.log(`${hm.toFixed(4)}hm`);
console.log(`${dam.toFixed(3)}Dam`);
console.log(`${dm.toFixed(1)}dm`);
console.log(`${cm.toFixed(1)}cm`);
console.log(`${mm.toFixed(1)}mm`);
