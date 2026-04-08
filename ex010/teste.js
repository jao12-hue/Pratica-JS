const prompt = require('prompt-sync')();

console.log("--- CÁLCULO DE PINTURA ---");

//Ler as dimensões da parede
const largura = parseFloat(prompt("Largura da parede (metros): "));
const altura = parseFloat(prompt("Altura da parede (metros): "));

//Calcular a área (Base x Altura)
const area = largura * altura;

//Calcular a tinta (1 litro para cada 2m²)
const litrosTinta = area / 2;

console.log("--------------------------");
console.log(`Área total a ser pintada: ${area.toFixed(2)}m²`);
console.log(`Quantidade de tinta necessária: ${litrosTinta.toFixed(2)} litros`);
