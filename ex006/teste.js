const prompt = require('prompt-sync')();

//Entrada de dados
const numero = parseInt(prompt("Digite um número: "));
const sucessor = numero + 1;
const antecessor = numero - 1;

//Resultado
console.log(`O antecessor de ${numero} é ${antecessor}.`);
console.log(`O sucessor de ${numero} é ${sucessor}.`); 
