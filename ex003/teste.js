const prompt = require('prompt-sync')();

//Entrada de Dados
const nome = prompt("Nome do Funcioário: ");
const salario = parseFloat(prompt("Salário: "));

//Resultado
console.log(`O funcionário(a) ${nome} tem o salário de R$${salario.toFixed(2)} em Julho`);
