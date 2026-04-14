const prompt = require('prompt-sync')();

console.log("=== REAJUSTE SALARIAL POR GÊNERO/TEMPO ===");

//Entrada de dados
const generoFuncionario = prompt("Qual o seu gênero? [M/F] ");
const salarioAtual = parseFloat(prompt("Qual o seu salário atual: R$"));
const anos = parseInt(prompt("Quantos anos você esta na empresa: "));

let aumento = 0;

//Lógica do reajuste salarial
if (generoFuncionario === "F") { // Se for MULHER
    if (anos < 15) {
        aumento = 0.05; // 5%
    } else if (anos <= 20) {
        aumento = 0.12; // 12%
    } else {
        aumento = 0.23; // 23%
    }

} else if (generoFuncionario === "M") { //Se for HOMEM
    if (anos < 20) {
        aumento = 0.03; // 3%
    } else if (anos <= 30) {
        aumento = 0.13; // 13%
    } else {
        aumento = 0.25; // 25%
    }
} else {
    console.log("Gênero inválido! Use M ou F.");
}

//Cálculo final
if (aumento > 0) {
    const novoSalario = salarioAtual + (salarioAtual * aumento);
    console.log("==========================================");
    console.log(`Percentual aplicado: ${aumento * 100}%`);
    console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
}
