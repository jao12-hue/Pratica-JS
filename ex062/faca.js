const prompt = require('prompt-sync')();

let somaIdade = 0;
let totalIdades = 0;
let pessoa21OuMais = 0;
let continuar = "";

do {
    let idade = parseInt(prompt("Idade: "));

    if (!isNaN(idade)) {
        somaIdade += idade;
        totalIdades++;

        if (idade >= 21) {
            pessoa21OuMais++;
        }
    } else {
        console.log("Por favor digite um número válido.");
    }

    continuar = prompt("Quer continuar? [S/N]").toUpperCase();

} while (continuar === "S");

let media = totalIdades > 0? somaIdade / totalIdades : 0;

console.log(`a) Quantas idades foram digitadas: ${totalIdades}`);
console.log(`b) Média entre as idades digitadas: ${media.toFixed(2)}`);
console.log(`c) Quantas pessoas tem 21 anos ou mais: ${pessoa21OuMais}`);