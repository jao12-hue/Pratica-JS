const prompt = require('prompt-sync')();

console.log("=== ALUGUEL DE CARROS DE PALHAÇOS ===");
console.log("1. Carros Populares (aluguel de R$90/dia)");
console.log("2. Carros de Luxo (aluguel de R$150/dia)");

//Entrada dos dados
const carro = parseInt(prompt("Escolha o tipo de carro (1 ou 2): "));
const dias = parseInt(prompt("Por quantos dias de aluguel: "));
const km = parseInt(prompt("Quantos Km foram percorridos? "));

let precoDia = 0;
let precoKm = 0;

//Lógica de cálculo
if (carro === 1) { // CARRO POPULAR
    precoDia = 90 * dias;
    if (km <= 100) {
        precoKm = km * 0.20;
    } else {
        precoKm = km * 0.10;
    }
} else if (carro === 2) {// CARRO LUXO
    precoDia = 150 * dias;
    if (km <= 200) {
    precoKm = km * 0.30;
    } else {
        precoKm = km * 0.25;
    }
} else {
    console.log("Tipo de carro INVÁLIDO!");
}

const total = precoDia + precoKm;

if (precoDia > 0) {
    console.log("=====================================");
    console.log(`Resumo do Aluguel:`);
    console.log(`Custo dos dias: R$${precoDia.toFixed(2)}`);
    console.log(`Custo por Km: R$${precoKm.toFixed(2)}`);
    console.log(`TOTAL A PAGAR: R$${total.toFixed(2)}`);
}
