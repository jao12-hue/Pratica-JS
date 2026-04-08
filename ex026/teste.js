const prompt = require('prompt-sync')();

console.log("=== COMPARADOR DE NÚMEROS INTEIROS ===");

//Entrada dos números inteiros
const v1 = parseInt(prompt("Digite o primeiro valor: "));
const v2 = parseInt(prompt("Digite o segundo valor: "));

//Comparar os valores
console.log("======================================");

if (v1 > v2) {
    console.log("O primeiro valor é o maior.");
} else if (v1 < v2){
    console.log("O segundo valor é o maior.");
} else {
    console.log(`Não existe valor maior, os dois são iguais.`);
}
