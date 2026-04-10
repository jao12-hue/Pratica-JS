const prompt = require('prompt-sync')();

console.log("=== BANCO ALEATORIO FODACI ===");

//Informações do empréstimo
const valorCasa = parseFloat(prompt("Qual o valor da casa que você quer pegar o empréstimo? "));
const salarioUser = parseFloat(prompt("Qual o seu salário? R$"));
const anos = parseInt(prompt("Em quantos anos você pretente pagar? "));

//Cálculo do valor da prestação mensal
const prestacao = valorCasa / (anos * 12);
const limite = salarioUser * 0.30;

console.log("==============================");
console.log(`VALOR DO IMÓVEL: R$${valorCasa.toFixed(2)}`);
console.log(`SALÁRIO DO USUÁRIO: R$${salarioUser.toFixed(2)}`);
console.log(`Você fez um empréstimo no valor de: R$${prestacao.toFixed(2)} com o prazo de ${anos} anos.`);

//Lógica para saber se o empréstimo foi aaprovado ou negado
if (prestacao <= limite) {
    console.log("SEU EMPRÉSTIMO FOI APROVADO!");
} else {
    console.log("SEU EMPRÉSTIMO FOI NEGADO!");
    console.log(`Motivo: A prestação de R$${prestacao.toFixed(2)} exede o limite de R$${limite.toFixed(2)} (30% do seu salário).`);
}
