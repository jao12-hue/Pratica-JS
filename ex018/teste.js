const prompt = require('prompt-sync')();

console.log("--- VERIFICAÇÃO DE ELEITOR ---");

// Entrada do ano de nascimento
const anoNascimento = parseInt(prompt("Em que ano você nasceu? "));

// Obtenção do ano atual (Dinâmico)
const anoAtual = new Date().getFullYear();

// Cálculo da idade
const idade = anoAtual - anoNascimento;

// Condição para votar (Idade mínima: 16 anos)
console.log("------------------------------");
console.log(`Você tem ${idade} anos.`);

if (idade >= 16) {
    console.log("Situação: JÁ PODE VOTAR.");
} else {
    const faltam = 16 - idade;
    console.log(`Situação: NÃO PODE VOTAR. Faltam ${faltam} ano(s).`);
}
