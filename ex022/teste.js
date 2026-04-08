const prompt = require('prompt-sync')();

console.log("--- STATUS DE ALISTAMENTO MILITAR ---");

// Entrada do ano de nascimento
const anoNascimento = parseInt(prompt("Em que ano você nasceu? "));

// Obtenção do ano atual para o cálculo
const anoAtual = new Date().getFullYear();

// Cálculo da idade base
const idade = anoAtual - anoNascimento;

console.log("-------------------------------------");
console.log(`Você tem (ou fará) ${idade} anos em ${anoAtual}.`);

if (idade < 18) {
    // Caso: Menor de 18 anos
    const faltam = 18 - idade;
    console.log(`Situação: ABAIXO DA IDADE.`);
    console.log(`Faltam ${faltam} ano(s) para o seu alistamento.`);
} else if (idade === 18) {
    // Caso: Exatos 18 anos
    console.log("Situação: NO ANO DE ALISTAMENTO!");
    console.log("Procure a Junta Militar mais próxima.");
} else {
    // Caso: Maior de 18 anos
    const passou = idade - 18;
    console.log(`Situação: ACIMA DA IDADE.`);
    console.log(`Já se passaram ${passou} ano(s) do seu alistamento.`);
}
