const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

// 1. Entrada de dados
console.log("--- CADASTRO DE PESSOAS ---");
for (let i = 0; i < 9; i ++) {
    nomes[i] = prompt(`Nome da ${i + 1}° pessoa: `);
    idades[i] = Number(prompt(`Idade de ${nomes[i]}: `));
    console.log("---------------------------");
}

// 2. Listagem de menores de idade
console.log("\n======= MENORES DE IDADE =======");
let encontrouMenor = false;

for (let i = 0; i < 9; i++) {
    // Verficamos a condição no  vetor de idades
    if (idades[i] < 18) {
        // Usamos o mesmo índice 'i' para buscar o nome correspondente
        console.log(`Nome: ${nomes[i].padEnd(15)} | Idade: ${idades[i]} anos`);
        encontrouMenor = true;
    }
}

if (!encontrouMenor) {
    console.log("Nenhuma pessoa menor de idade foi cadastrada.");
}
console.log("================================");