const prompt = require('prompt-sync')();

console.log("=== CONTADOR PAR E ÍMPAR ===");

// Variáveis para contar as ocorrências
let par = 0;
let impar = 0;
let contador = 1; //Começamos a contar do 1

// Enquanto o contador for menor ou igual a 6, ele repete
while (contador <= 6) {
    let numero = prompt("Digite o " + contador + "º número: ");

    if (numero % 2 === 0) {
        par += 1; // Achou um par, guarda na caixinha
    } else {
        impar += 1; //Senão, guarda na caixinha dos ímpares
    }

    contador += 1; // IMPORTANTE: Aumenta o contador para não rodar para sempre
}

console.log(`Total de Pares: ${par}`);
console.log(`Total de Ímpares: ${impar}`);
