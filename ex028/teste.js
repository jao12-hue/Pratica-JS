const prompt = require('prompt-sync')();

console.log("=== CALSSIFICADOR DE TERRENOS ===");

//Entrada da largura e comprimento de um terreno
const largura = parseFloat(prompt("LARGURA do terreno: "));
const comprimento = parseFloat(prompt("COMPRIMENTO do terreno: "));

//Cálculo da área em (m²)
const area = largura * comprimento;

console.log("=================================");
console.log(`Área total do terreno: ${area.toFixed(2)}m².`)
if (area < 100) {
    console.log(`Classificação: TERRENO POPULAR.`);
} else if (area <= 500) {
    console.log(`Classificação: TERRENO MASTER.`);
} else {
    console.log(`Classificação: TERRENO VIP.`)
}
