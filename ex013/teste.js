const prompt = require('prompt-sync')();

console.log("--- REAJUSTE SALARIAL ---");

// Entrada do salário atual
const salario = parseFloat(prompt("Digite o salário do funcionário: R$"));

// Cálculo do valor do aumento (15%)
const aumento = salario * 0.15;

// Cálculo do novo salário somando o aumento
const novoSalario = salario + aumento;

// Exibição dos resultados
console.log("--------------------------");
console.log(`Salário antigo: R$${salario.toFixed(2)}`);
console.log(`Novo salário (15% de aumento): R$${novoSalario.toFixed(2)}`);
