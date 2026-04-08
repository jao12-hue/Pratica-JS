const prompt = require('prompt-sync')();

//Entrada de dados
const nota1 = parseFloat(prompt("Nota 1: "));
const nota2 = parseFloat(prompt("Nota 2: "));

//Cálculo da média
const media = (nota1 + nota2) / 2

//Resultado
console.log(`A média entre ${nota1.toFixed(1)} e ${nota2.toFixed(1)} é igual a ${media.toFixed(1)}.`);
