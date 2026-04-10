const prompt = require('prompt-sync')();

console.log("=== CÁLCULO DO IMC ===");

//Entrada dos dados
const massa = parseFloat(prompt("MASSA (Kg): "));
const altura = parseFloat(prompt("ALTURA (m): "));

//Cálculo do IMC
const imc = massa / (altura ** 2);
console.log(`IMC: ${imc.toFixed(2)}`);

//Lógica para o resultado do IMC
if (imc < 18.5) {
    console.log("VOCÊ ESTÁ ABAIXO DO PESO!");
} else if (imc >= 18.5 && imc < 25) {
    console.log("VOCÊ ESTÁ NO PESO IDEAL!");
} else if (imc >= 25 && imc < 30) {
    console.log("VOCÊ ESTÁ COM SOBREPESO!");
} else if (imc >= 30 && imc < 40) {
    console.log("VOCÊ ESTÁ COM OBESIDADE!");
} else {
    console.log("VOCÊ ESTÁ COM OBESIDADE MORBIDA!");
}
