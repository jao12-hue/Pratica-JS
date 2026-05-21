const prompt = require('prompt-sync')();

let nomeMaisVelho = "";
let idadeMaisVelho = 0;

let nomeMulheresMaisJovem = "";
let idadeMulheresMaisJovem = Infinity; // Iniciamos com um valor infinito para qualquer idade ser menor

let somaIdade = 0;
let totalPessoas = 0;
let homensMais30 = 0;
let mulheresMenos18 = 0;

let continuar = "S";

while (continuar.toUpperCase() === "S") {
    let nome = prompt("Nome: ");
    let idade = parseInt(prompt("Idade: "));
    let sexo = prompt("Sexo [M/F]: ").toUpperCase();

    // c) Acúmulo para a média
    somaIdade += idade;
    totalPessoas++;

    // a) Pessoa mais velha (indepedente de sexo)
    if (idade > idadeMaisVelho) {
        idadeMaisVelho = idade;
        nomeMaisVelho = nome;
    }

    // Lógica para Homens
    if (sexo === "M") {
        // d) Homens com mais de 30 anos
        if(idade > 30) {
            homensMais30++;
        }
    }

    // Lógica para Mulheres
    if (sexo === "F") {
        // b) Mulher mais jovem
        if (idade < idadeMulheresMaisJovem) {
            idadeMulheresMaisJovem = idade;
            nomeMulheresMaisJovem = nome;
        }
        // e) Mulheres com menos de 18 anos
        if (idade < 18) {
            mulheresMenos18++;
        }
    }

    continuar = prompt("Quer continuar? [S/N]");
}

// Cálculo da média
const media = totalPessoas > 0 ? somaIdade / totalPessoas : 0;

console.log("==== RELATÓRIO FINAL ====");
console.log(`a) Pessoa mais velha: ${nomeMaisVelho} (${idadeMaisVelho} anos)`);
console.log(`b) Mulher mais jovem: ${nomeMulheresMaisJovem || "Nunhuma cadastrada"}`);
console.log(`c) Média de idade do grupo: ${media.toFixed(2)} anos`);
console.log(`d) Homens com mais de 30 anos: ${homensMais30}`);
console.log(`e) Mulheres com menos de 18 anos: ${mulheresMenos18}`);