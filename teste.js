const prompt = require('prompt-sync')();

console.log("=== CONTAGEM INTELIGENTE ===");

let contador = 1;

const inicio = parseInt(prompt("Início: "));
const fim = parseInt(prompt("Fim: "));

contador = inicio;

console.log("============================");
console.log("       C O N T A N D O      ");
console.log("============================");

if (inicio < fim) {
    while (contador <= fim) {
        console.log(contador + ".. ");
        contador = contador + 1
    }
} else if (inicio > fim) {
    while (contador >= fim) {
        console.log(contador + ".. ")
        contador = contador - 1
    }
}

console.log("============================");
