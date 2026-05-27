const prompt = require('prompt-sync')();

const numeros = [];

// Leitura dos 15 números
for (let i = 1; i <= 15; i++) {
    const n = Number(prompt(`Digite o ${i}° número: `));
    numeros.push(n);
}

// Exibir o vetor completo
console.log("Vetor comleto:");
console.log(numeros);

// Verificando múltiplos de 10
console.log("\nPosições com múltiplos de 10:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 10 === 0) {
        console.log(`  posição [${i}] -> ${numeros[i]}`);
    }
}