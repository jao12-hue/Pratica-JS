const prompt = require('prompt-sync')();

console.log("=== PROGRAMA VIDA SAUDÁVEL ===");

//Entrada de dados
const horasAtividade = parseFloat(prompt("Quantas horas de atividade física você faz este mês? "));

let pontos = 0;

//Lógica de pontuação por faixas
if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
    pontos = horasAtividade * 5;
} else {
    pontos = horasAtividade * 10;
}

//Conversão de pontos em dinheiro (R$ 0,05 por ponto)
const faturamento = pontos * 0.05;

console.log("==============================");
console.log(`Total de horas: ${horasAtividade}h`);
console.log(`Pontos acumulados: ${pontos} pts`);
console.log(`Valor a receber: R$${faturamento.toFixed(2)}`);
