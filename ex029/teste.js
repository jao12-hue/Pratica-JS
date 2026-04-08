const prompt = require('prompt-sync')();

console.log("=== REAJUSTE SALARIAL ===");

//Entrada dos dados
const nomeFuncionario = prompt("Nome do funcionário: ");
const salario = parseFloat(prompt("Salário do funcionário: R$"));
const anos = parseInt(prompt("Quantos anos você trabalha na empresa? "));

//Aumento salarial
console.log("=========================");

if (anos < 3) {
    aumento = 0.03;
} else if (anos < 10) {
    aumento = 0.125;
} else {
    aumento = 0.20;
}

//Cálculo do novo salário
const valorAumento = salario * aumento;
const novoSalario = salario + valorAumento;

console.log(`Funcionario: ${nomeFuncionario}.`);
console.log(`Tempo de empresa: ${anos} anos.`);
console.log(`Seu salário atual é: R$${salario.toFixed(2)}.`);
console.log(`Reajuste aplicado: ${(aumento * 100).toFixed(2)}%.`);
console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
