const prompt = require("prompt-sync")();

console.log("==== GERADOR DE PA ===="); 

let primeiroTermo = Number(prompt("Primeiro termo: "));
let razao = Number(prompt("Razão: "));

let termoAtual = primeiroTermo;
let soma = 0;
let elementos = "";

for (let i = 1; i <= 10; i++) {
    soma += termoAtual;

    elementos += (i === 10) ? `${termoAtual}` : `${termoAtual} -> `;

    termoAtual += razao;
}

console.log(`\nSequência:`);
console.log(elementos);
console.log(`\n--------------------------`);
console.log(`Soma de todos os valores: ${soma}`);
console.log(`----------------------------`);
