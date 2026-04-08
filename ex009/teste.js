const prompt = require('prompt-sync')();

// Leitura do valor em Reais
console.log("--- CONVERSOR DE MOEDAS ---");
const reais = parseFloat(prompt("Quanto dinheiro você tem na carteira? R$"));

// Cálculo da conversão (Dinheiro / Cotação)
const cotacao = 3.45;
const dolares = reais / cotacao;

// Exibição do resultado com 2 casas decimais
console.log(`Com R$${reais.toFixed(2)}, você pode comprar US$${dolares.toFixed(2)}`);
