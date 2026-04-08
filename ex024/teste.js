const prompt = require('prompt-sync')();

console.log("=== CÁLCULO DE DISÂNCIA ===");

//Entrada da distância desejada
const distancia = parseFloat(prompt("A que distância você deseja percorrer em (Km): "));

//Definição do preço por Km percorrido
let precoPorKm; 

if (distancia <= 200) {
    precoPorKm = 0.50; // tarifa padrão para viagens curtas
} else {
    precoPorKm = 0.45; // tarifa reduzida para viagens longas
}

//Cálculo valor total da passagem
const precoPassagem = distancia * precoPorKm;

//Resultado final
console.log("===========================");
console.log(`Distância total: ${distancia}Km.`);
console.log(`Tarifa aplicada: R$${precoPorKm.toFixed(2)} por Km.`);
console.log(`Preço Total da passagem: R$${precoPassagem.toFixed(2)}.`)
