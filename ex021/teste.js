const prompt = require('prompt-sync')();

console.log("--- ANALISADOR DE ANO BISSEXTO ---");

// Entrada do ano para análise
const ano = parseInt(prompt("Digite um ano para verificar: "));

// Lógica de verificação composta
// Tradução: Se (divisível por 4 E não por 100) OU (divisível por 400)
const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

console.log("----------------------------------");
console.log(`Ano analisado: ${ano}`);

if (ehBissexto) {
    console.log("Resultado: O ano é BISSEXTO (366 dias).");
} else {
    console.log("Resultado: O ano NÃO É BISSEXTO (365 dias).");
}
