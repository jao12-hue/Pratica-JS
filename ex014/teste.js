const prompt = require('prompt-sync')();

console.log("--- LOCADORA DE VEÍCULOS ---");

// Entrada de dados do aluguel
const kmPercorridos = parseFloat(prompt("Quantidade de Km percorridos: "));
const diasAlugados = parseInt(prompt("Quantidade de dias de aluguel: "));

// Cálculo do custo fixo pelos dias (R$90/dia)
const custoDias = diasAlugados * 90;

// Cálculo do custo variável pela quilometragem (R$0,20/Km)
const custoKm = kmPercorridos * 0.20;

// Soma total dos serviçoconst precoTotal = custoDias + custoKm;

// Exibição do fechamento da conta
console.log("----------------------------");
console.log(`Custo por dias: R$${custoDias.toFixed(2)}`);
console.log(`Custo por Km: R$${custoKm.toFixed(2)}`);
console.log(`Total a pagar: R$${precoTotal.toFixed(2)}`);
