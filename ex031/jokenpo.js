const prompt = require('prompt-sync')();

console.log("=== JOKENPO ===");
console.log("1. Pedra");
console.log("2. Papel");
console.log("3. Tesoura");

//Jogada do Usuário
const jogador = parseInt(prompt("Qual a sua jogada? "));

//Jogada do Computador(Gera um número entre 1 e 3)
const computador = Math.floor(Math.random() * 3) + 1;

//Resultado das Jogadas
console.log("===============");
console.log(`Sua jogada foi: ${jogador}`);
console.log(`A jogada do computador foi: ${computador}`);

//Lógica para determinar um vencedor
if (jogador === computador) {
    console.log("EMPATE!");
} else if (
    (jogador === 1 && computador === 3) || //Pedra vence de Tesoura
    (jogador === 2 && computador === 1) || //Papel vence de Pedra
    (jogador === 3 && computador === 2)    //Tesoura vence de Papel
    ) {
        console.log("VOCÊ VENCEU!");
    } else {
        console.log("O COMPUTADOR VENCEU!");
    }