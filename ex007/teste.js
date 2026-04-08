const prompt = require('prompt-sync')();

//Entrada de dados
const numero = parseFloat(prompt("Digite um número Real: "));

//Dobro do numero e sua terça parte
const dobro = numero * 2;
const tercaParte = numero / 3;

//Resultado
console.log(`O dobro de ${numero} é ${dobro}.`);
console.log(`A terça parte de ${numero} é ${tercaParte.toFixed(5)}.`);
