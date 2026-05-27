const prompt = require('prompt-sync')();

const vetor = [];

// Preenche o etor com números sortesados entre 1 e 15
for (let i = 0; i < 30; i++) {
    vetor[i] = Math.floor(Math.random() * 15) + 1;
}

console.log("Vetor sorteado:");
console.log(vetor);

// Lê a chave digitada pelo usuário
const chave = parseInt(prompt("Digite um número para buscar (1 a 15):"));

// Busca a chave no vetor
let contador = 0;

console.log(`\nPosições onde a chave ${chave} foi encontrada:`);
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === chave) {
            console.log(`  posição [${i}]`);
            contador++;
        }
    }

console.log(`\nA chave ${chave} foi sorteada ${contador} vez(es).`);