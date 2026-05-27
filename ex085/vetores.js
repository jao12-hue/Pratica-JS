const prompt = require('prompt-sync')();

let nomes = [];
let sexos = [];
let salarios = [];  

// 1. Entrada de dados
console.log("--- CADASTRO FUNCIONÁRIOS ---")
for (let i = 0; i < 5; i ++) {
    nomes[i] = prompt(`Nome do ${i + 1}° funcionário: `);

    // Validação simples para o sexo (M/F)
    sexos[i] = prompt(`Sexo de ${nomes[i]} [M/F]: `).toUpperCase();

    salarios[i] = Number(prompt(`Salário de ${nomes[i]} R$: `));
    console.log("---------------------------");
}

// 2. Listagem filtrada (Mulheres com Salário > 5000)
console.log("\n======= FUNCIONÁRIAS SELECIONADAS (F > R$ 5.000 =======");
let encontrouFiltro = false;

for (let i = 0; i < 5; i++) {

    // Aplicando a lógica de filtro duplo
    if (sexos[i] === "F" && salarios[i] < 5000) {
        console.log(`Nome: ${nomes[i].padEnd(15)} | Salário: ${salarios[i].toFixed(3)}`);
        encontrouFiltro = true;
    }
}

if (!encontrouFiltro) {
    console.log("Nenhuma funcionária atende aos critérios de filtro.");
}
console.log("================================");