const prompt = require('prompt-sync')();

const numeros = [];

for (let i = 0; i < 10; i++) {
    const n = Number(prompt(`Digite o ${i + 1}° número: `));
    numeros.push(n);
}

console.log("Vetor completo:");
console.log(numeros);

console.log("\nNúmeros pares econtrados");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`posição [${i}] -> ${numeros[i]}`);
    }
}