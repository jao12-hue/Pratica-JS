const prompt = require('prompt-sync')();

console.log("=== CONTAGEM NÚMEROS INTEIROS ===");

//Entrada de dados
const valor = parseInt(prompt("Digite um valor: "));

// Lógica de repetição para o valor digitado
let contador = 0; // Início da contagem

let resultado = ""; // String para acumular os números na mesma linha

while(contador <= valor) {
    resultado += contador + " ";// Adiciona o número e um espaço
    contador++; // Soma 1 a cada volta
}

console.log("=================================");
console.log(`Contagem: ${resultado + "Acabou!"}`); 
