const prompt = require('prompt-sync')();

console.log("--- RADAR ELETRÔNICO ---");

// Entrada da velocidade
const velocidade = parseFloat(prompt("Qual a velocidade do carro (Km/h)? "));

// Verificação da condição de multa
if (velocidade > 80) {
    const kmAcima = velocidade - 80;
    const valorMulta = kmAcima * 5;

    console.log("--------------------------------");
    console.log("MULTADO! Você excedeu o limite de 80Km/h.");
    console.log(`Velocidade registrada: ${velocidade}Km/h`);
    console.log(`Valor da multa: R$${valorMulta.toFixed(2)}`);
} else {
    console.log("--------------------------------");
    console.log("Velocidade dentro do limite. Boa viagem!");
}
