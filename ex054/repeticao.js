const prompt = require('prompt-sync')();

let contador = 1;
const totalPessoas = 7;

let mais90kg = 0;
let menos50kg_menos160 = 0;
let mais100kg_mais190m = 0;
let somaAlturaTotal = 0;

while (contador <= totalPessoas) {
    console.log(`\n--- ${contador}ª PESSOA ---`)
    let altura = parseFloat(prompt("ALTURA: "));
    let peso = parseFloat(prompt("PESO: "));

    somaAlturaTotal += altura;

// Se for maior de 90kg
    if (peso > 90) {
        mais90kg++;
    }

// Se a pessoa pesa menos de 50kg e tem menos de 1.60m
    if (peso < 50 && altura < 1.60) {
        menos50kg_menos160++;
    }

// Se a pessoa mede mais de 1.90m e pesa mais de 100kg
    if (peso > 100 && altura > 1.90) {
        mais100kg_mais190m++;
    }

    contador++;
}

let mediaAltura = somaAlturaTotal / totalPessoas;

console.log(`\n--- RESULTADOS ---`);
console.log(`A média de altura do grupo foi de ${mediaAltura.toFixed(2)}m`);
console.log(`${mais90kg} pessoas pesam mais de 90Kg`);
console.log(`${menos50kg_menos160} pessoas pesam menos de 50Kg e tem menos de 1.60m`);
console.log(`${mais100kg_mais190m} pessoas pesam mais de 100kg e tem mais de 1.90m`);
