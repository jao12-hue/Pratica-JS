const prompt = require('prompt-sync')();

console.log("\n--- PAR OU IMPAR ---");
let n = parseInt(prompt("Digite um valor: "));

function ParOuImpar(numero) {
    console.log("\n--- Resultados ---");

    if (numero % 2 === 0) {
        console.log(`O valor ${numero} é PAR.`);
    } else {
        console.log(`O valor ${numero} é IMPAR.`);
    }

    console.log("----------------------");
}

ParOuImpar(n);