const prompt = require('prompt-sync')();

// Vetor para armazenar os nomes
const nomes = [];

// Leitura dos 7 nomes
for(let i = 1; i <= 7; i++) {
    const nome = prompt(`Digite o ${i}° nome: `);

    // adiciona cada nome ao final do vetor, na ordem de inserção.
    nomes.push(nome);
}

// Exibição em ordem inversa
console.log("\n--- Nomes em ordem inversa ---");

// Para inverter, o loop começa do último índice
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(`${nomes.length - i}°: ${nomes[i]}`);
}
