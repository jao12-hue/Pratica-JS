const prompt = require('prompt-sync')();

let notas = [];
let somaNotas = 0;
let maiorNota = 0;

// 1. Entrada de dados e cálculo da soma e maior nota
for (let i = 0; i < 10; i++) {
    notas[i] = Number(prompt(`Nota ${i + 1}: `));
    somaNotas += notas[i];

    // c) Encontrar a maior nota
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }
}

// a) Calcular a média da turma
let mediaTurma = somaNotas / notas.length;

// 2. Segunda passagem para analisar notas em relção à média e posições da maior nota
let acimaDaMedia = 0;
let posicaoMaiorNota = [];

for (let i = 0; i < notas.length; i++) {
    // b) Contar alunos acima da média
    if (notas[i] > mediaTurma) {
        acimaDaMedia++;
    }

    // d) Identificar todas as posições onde a maior nota aparece
    if (notas[i] === maiorNota) {
        posicaoMaiorNota.push(i);
    }
}

console.log("\n---------- RELATÓRIO ESCOLAR ----------");
console.log(`a) Média da turma: ${mediaTurma.toFixed(2)}`);
console.log(`b) Alunos acima da média: ${acimaDaMedia}`);
console.log(`c) Maior nota digitada: ${maiorNota}`);
console.log(`d) Posições da maior nota: [ ${posicaoMaiorNota.join(", ")} ]`);
console.log("---------------------------------------");