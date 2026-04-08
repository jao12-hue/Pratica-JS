const prompt = require('prompt-sync')();

//Entrada de Dados
const numero1 = parseInt(prompt("Digite um valor: "));
const numero2 = parseInt(prompt("Digite outro valor: "));

//Soma dos dois valores
const soma = numero1 + numero2;

//Resultado
console.log(`A soma dos valores ${numero1} e ${numero2} é igual a ${soma}.`);
