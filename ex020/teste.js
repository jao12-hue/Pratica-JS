const prompt = require('prompt-sync')();

console.log("--- PAR OU ÍMPAR ---");

// Entrada do número inteiro
const numero = parseInt(prompt("Digite um número inteiro: "));

// Verificação do resto da divisão por 2
const resto = numero % 2;

console.log("--------------------");
console.log(`Número digitado: ${numero}`);

if (resto === 0) {
    console.log("Resultado: O número é PAR.");
} else {
    console.log("Resultado: O número é ÍMPAR.");
}
