const prompt = require('prompt-sync')();

console.log("--- SISTEMA DE DESCONTOS ---");

// Entrada de dados do produto
const preco = parseFloat(prompt("Digite o preço do produto: R$"));

// Cálculo do valor do desconto (5%)
const desconto = preco * 0.05;

// Cálculo do preço final com a dedução
const precoPromocional = preco - desconto;

// Saída formatada para moeda
console.log("----------------------------");
console.log(`Preço original: R$${preco.toFixed(2)}`);
console.log(`Preço com 5% de desconto: R$${precoPromocional.toFixed(2)}`);
