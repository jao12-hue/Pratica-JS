const prompt = require('prompt-sync')();

console.log("=== SOMADOR DE NÚMEROS INTEIROS ===");

let contador = 1;
let soma = 0;

while (contador <= 7) {
    const valor = parseInt(prompt(`Digite o ${contador}º valor: `));
    soma += valor;
    contador++;
}

console.log("===================================");
console.log(`A soma total dos números digitados é: ${soma}`);