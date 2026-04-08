const prompt = require('prompt-sync')();

console.log("--- PROMOÇÃO DIA DA MULHER ---");

// Entrada de dados do cliente
const nome = prompt("Nome do cliente: ");
const sexo = prompt("Sexo [M/F]: ").toUpperCase();
const valorCompras = parseFloat(prompt("Valor total das compras: R$"));

// Definição das variáveis de cálculo
let porcentagemDesconto;

// Verificação do sexo para definir o desconto
if (sexo === 'F') {
    porcentagemDesconto = 0.13; // 13% para mulheres
} else {
    porcentagemDesconto = 0.05; // 5% para homens (e outros)
}

// Cálculos finais
const valorDesconto = valorCompras * porcentagemDesconto;
const precoFinal = valorCompras - valorDesconto;

// Exibição do resultado
console.log("------------------------------");
console.log(`Cliente: ${nome}`);
console.log(`Desconto aplicado: ${(porcentagemDesconto * 100)}%`);
console.log(`Valor do desconto: R$${valorDesconto.toFixed(2)}`);
console.log(`Preço final a pagar: R$${precoFinal.toFixed(2)}`);
