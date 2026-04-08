const prompt = require('prompt-sync')();

console.log("--- AVALIAÇÃO DE ALUNO ---");

// Entrada de dados
const nome = prompt("Nome do aluno: ");
const nota1 = parseFloat(prompt("Primeira nota: "));
const nota2 = parseFloat(prompt("Segunda nota: "));

// Cálculo da média
const media = (nota1 + nota2) / 2;

// Verificação de aproveitamento (Média 7.0)
console.log("--------------------------");
console.log(`Aluno: ${nome}`);
console.log(`Média final: ${media.toFixed(1)}`);

if (media >= 7.0) {
    console.log("Situação: Teve um BOM APROVEITAMENTO.");
} else {
    console.log("Situação: NÃO teve um bom aproveitamento.");
}
