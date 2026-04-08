const prompt = require('prompt-sync')();

console.log("--- CÁLCULO DE SALÁRIO MENSAL ---");

// Entrada de dias trabalhados
const diasTrabalhados = parseInt(prompt("Dias trabalhados no mês: "));

// Definição das constantes de ganho
const horasPorDia = 8;
const valorPorHora = 25;

// Cálculo do salário (Dias * Horas * Valor/Hora)
const salarioTotal = diasTrabalhados * horasPorDia * valorPorHora;

// Exibição do resultado
console.log("---------------------------------");
console.log(`Dias trabalhados: ${diasTrabalhados}`);
console.log(`Salário total a receber: R$${salarioTotal.toFixed(2)}`);
