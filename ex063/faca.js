const prompt = require('prompt-sync')();

let somaValores = 0;
let menorValor = Infinity; // Iniciamos com infinito para qualquer número seja menor que ele
let valoresPares = 0;
let totalValores = 0;
let continuar = "";

do {
    let numero = parseInt(prompt("Digite um número: "));

    if (!isNaN(numero)) {
        // a) Somatòrio
        somaValores += numero;
        totalValores++;

        // b) Menor valor digitado
        if (numero < menorValor) {
            menorValor = numero;
        }

        // d) Quantos valores são pares
        if (numero % 2 === 0) {
            valoresPares++;
        }
    } else {
        console.log("Entrada inválida! Digite apenas números.")
    }

    continuar = prompt("Quer continuar? [S/N]: ").toUpperCase();

} while(continuar === "S");

// c) Cálculo da média
let media = totalValores > 0 ? somaValores / totalValores : 0;

console.log(`a) O somatório entra todos os valores é: ${somaValores}`);
console.log(`b) Menor valor digitado: ${totalValores > 0 ? menorValor : "Nenhum"}`);
console.log(`c) Média entre todos os valores: ${media.toFixed(2)}`);
console.log(`d) Valores pares: ${valoresPares}`);