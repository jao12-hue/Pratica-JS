const prompt = require('prompt-sync')();

let vetor = [];

// 1. Preenchendo o vetor com 20 números aleatórios entre 0 e 99
for (let i = 0; i < 20; i++) {
    vetor[i] = Math.floor(Math.random() * 100);
}

console.log("Vetor Original: ");
console.log(vetor.join(" - "));

// 2. Lógica de Ordenação (Bubble Sort)
for (let i = 0; i < vetor.length; i++){
    for (let j = 0; j < vetor.length - 1; j++) {
        // Se o número for maior que o próximo, eles trocam de lugar
        if (vetor[j] > vetor[j + 1]) {
            let aux = vetor[j];      // Guarda o valor em uma variável auxiliar
            vetor[j] = vetor[j + 1]; // Move o menor para a esquerda
            vetor[j + 1] = aux;      // Move o maior para a direita
        }
    }
}

console.log("\n--------------------------------------------------");
console.log("Vetor em Ordem Crescente:");
console.log(vetor.join(" - "));