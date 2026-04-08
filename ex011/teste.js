const prompt = require('prompt-sync')();

console.log("--- CÁLCULO DE DELTA (Δ) ---");

//Ler os valores de A, B e C
const a = parseFloat(prompt("Digite o valor de A: "));
const b = parseFloat(prompt("Digite o valor de B: "));
const c = parseFloat(prompt("Digite o valor de C: "));

//Calcular o Delta
const delta = Math.pow(b, 2) - (4 * a * c);

console.log("----------------------------");
console.log(`Para a equação: ${a}x² + ${b}x + ${c} = 0`);
console.log(`O valor de Delta é: ${delta}`);
