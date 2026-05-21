const prompt = require('prompt-sync')();

let contador = 1;
let somaIdades = 0;
let menor5 = 0;
let maior18 = 0;
let maiorIdade = 0;
const totalPessoas = 10;

while (contador <= 10) {
    let entrada = prompt(`Digite a idade da ${contador}ª pessoa: `);
    let idade = parseInt(entrada);

    if (isNaN(idade)) {
        console.log("Por favor, digite uma idade válida.");
        // Não incrementamos o contador para que ele peça o mesmo produto de novo
        continue;
    }

    somaIdades += idade;

    if (idade <= 5) {
        menor5++;
    }

    if (idade > 18) {
        maior18++;
    }

    if (contador === 1) {
        maiorIdade = idade;
    } else if (idade > maiorIdade){
        maiorIdade = idade;
    }

    contador++;
}

let media = somaIdades / totalPessoas;

console.log(`Relatorio Final:\nMédia de idade do grupo: ${media.toFixed(1)}\nMaiores de 18 anos: ${maior18}\nMenores de 5 anos: ${menor5}\nMaior idade registrada: ${maiorIdade}`);
