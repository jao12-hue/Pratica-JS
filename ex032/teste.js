const prompt = require('prompt-sync')();

console.log("=== ADIVINHE O NÚMERO SORTEADO ===");

//Usuário digita o valor
const user = parseInt(prompt("Escolha um número de 1 a 5 que você acha que vai ser sorteado: "));

//Computador gera um número entre 1 e 5
const computador = Math.floor(Math.random() * 5) + 1;

console.log(`O computador sorteou o número: ${computador}`);
//Lógica para saber se o usuário acertou o valor sorteado
if (user === computador) {
    console.log("VOCÊ ACERTOU O NÚMERO SORTEADO!");
} else {
    console.log("VOCÊ ERROU O NÚMERO SORTEADO!");
}
