const prompt = require('prompt-sync')();

console.log("=== ADIVINHE O NÚMERO SORTEADO ===");
console.log("O computador sorteou um número entre 1 e 10. Você tem 4 chances!");

//Computador gera um número entre 1 e 10
const computador = Math.floor(Math.random() * 10) + 1;

let tentativas = 1;
let acertou = false;

while (tentativas <= 4) {
    console.log(`\nTentativas ${tentativas} de 4`);
    const user = parseInt(prompt("Qual o seu palpite? "));

    if (user === computador) {
        console.log("VOCÊ ACERTOU O NÚMERO SORTEADO!");
        acertou = true;
        break; // Se acertar, o break para o while imediatamente
    } else {
        console.log("VOCÊ ERROU!");

        // Dica para ajudar o user
        if(user > computador) {
            console.log("Dica: O número sorteado é MENOR.");
        } else {
            console.log("Dica: O número sorteada é MAIOR.");
        }
    }

    tentativas++;
}

if (!acertou) {
    console.log("\nSinto muito, suas chances acabaram!");
    console.log(`O número sorteado era: ${computador}`);
}
