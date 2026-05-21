const prompt = require('prompt-sync')();

let contador = 1;
const totalPessoas = 5;

let totalHomens = 0;
let totalMulheres = 0;
let somaIdadeHomens = 0;
let somaIdadeGrupo = 0;
let mulheresAcima20 = 0;

while (contador <= totalPessoas) {
    console.log(`\n--- ${contador}ª PESSOA ---`)
    let idade = parseInt(prompt("Idade: "));
    let sexo = prompt("Sexo: [M/F]: ").toUpperCase();
    
    if (isNaN(idade) || (sexo !== 'M' && sexo !== 'F')) {
        console.log("Dados inválidos! Por favor, repita o cadastro desta pessoa.");
        continue;
    }

    somaIdadeGrupo += idade;

    if (sexo === 'M') {
        totalHomens++;
        somaIdadeHomens += idade;
    }
    else {
        totalMulheres++;
        if (idade > 20) {
            mulheresAcima20++;
        }
    }

    contador++;
}

let mediaGrupo = somaIdadeGrupo / totalPessoas;
let mediaHomens = totalHomens > 0 ? (somaIdadeHomens / totalHomens) : 0;

console.log(`\n=================================`);
console.log(`        RESULTADO FINAL          `);
console.log(`=================================`);
console.log(`Homens cadastrados: ${totalHomens}`);
console.log(`Mulheres cadastradas: ${totalMulheres}`);
console.log(`Média de idade do Grupo: ${mediaGrupo.toFixed(1)}`);
console.log(`Média de idade dos Homens: ${mediaHomens.toFixed(1)}`);
console.log(`Mulheres acima de 20 anos: ${mulheresAcima20}`);
