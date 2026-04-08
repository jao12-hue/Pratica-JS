const prompt = require('prompt-sync')();

// Entrada do nome do usuário
const nome = prompt("Qual é o seu nome? ");

// Exibição da mensagem de boas-vindas usando Template String
console.log(`Olá ${nome}, é um prazer te conhecer!`);
