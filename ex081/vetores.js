const prompt = require('prompt-sync')();

let idades = [];
let somaIdades = 0;
let maiorIdade = 0;

// 1. Leitura das idades e armazenamento do vetor
for (let i = 0; i < 8; i++) {
    idades[i] = Number(prompt(`Digite a idade da ${i + 1}° pessoa: `));
    somaIdades += idades[i];

    // c) Encontrar a maior idade digitada
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
    }
}

// Cálculo da média
let media = somaIdades / idades.length;

// 2. Análise dos dados coletados
let posicoes25 = "";
let posicoesMaiorIdade = "";

for (let i = 0; i < idades.length; i++) {
    // b) Pessoas com mais de 25 anos
    if (idades[i] > 25) {
        posicoes25 += i + " ";
    }

    // d) Posições da maior idade
    if (idades[i] === maiorIdade) {
        posicoesMaiorIdade += i + " ";
    }
}

console.log("\n======= RELATÓRIO =======");
console.log(`a) Média de idade: ${media.toFixed(2)} anos`);
console.log(`b) Posições com mais de 25 anos: [ ${posicoes25.trim()} ]`);
console.log(`c) Maior idade digitada: ${maiorIdade}`);
console.log(`d) Posições da maior idade: [ ${posicoesMaiorIdade.trim()} ]`);
