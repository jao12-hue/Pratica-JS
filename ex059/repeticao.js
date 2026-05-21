const prompt = require('prompt-sync')();

let maiorIdade = 0;
let totalHomens = 0;
let idadeMulherMaisJovem = 0;
let somaIdadeHomens = 0;
let continuar = 'S';

while (continuar.toUpperCase() === 'S') {
    let sexo = prompt("Sexo [M/F]: ").toUpperCase();
    let idade = parseInt(prompt("Idade: "));

    // a) Qual é a maior idade lida
    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    // Lógica para Homens (b e d)
    if (sexo === 'M') {
        totalHomens++;
        somaIdadeHomens += idade;
    }

    // c) Qual é a idade da mulher mais jovem
    if (sexo === 'F') {
        if (idadeMulherMaisJovem === null || idade < idadeMulherMaisJovem) {
            idadeMulherMaisJovem = idade;
        }
    }

    continuar = prompt("Quer continuar? [S/N]: ");
}

// Cálculos finais
let mediaIdadeHomens = totalHomens > 0 ? somaIdadeHomens / totalHomens : 0;

console.log("==== RESULTADOS ====");
console.log(`a) Maior idade lida: ${maiorIdade}`);
console.log(`b) Total de homens cadastrados: ${totalHomens}`);
console.log(`c) Idade da mulher mais jovem: ${idadeMulherMaisJovem ?? "Nenhuma mulher foi cadastrada."}`);
console.log(`d) Média de idade entr os homens: ${mediaIdadeHomens.toFixed(2)}`);
