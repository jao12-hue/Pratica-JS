const prompt = require('prompt-sync')();

console.log("--- DESAFIO: REDUÇÃO DE VIDA ---");

// Entrada de dados do usuário
const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
const anosFumando = parseInt(prompt("Fuma há quantos anos? "));

// Cálculos de tempo perdido
const totalCigarros = cigarrosPorDia * (anosFumando * 365);
const totalMinutosPerdidos = totalCigarros * 10;

// Conversão de minutos para dias (1 dia = 1440 minutos)
const diasPerdidos = totalMinutosPerdidos / 1440;

// Exibição do resultado
console.log("--------------------------------");
console.log(`Você já fumou aproximadamente ${totalCigarros} cigarros.`);
console.log(`Isso equivale a uma redução de ${diasPerdidos.toFixed(2)} dias de vida.`);
