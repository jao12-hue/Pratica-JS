const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let idade = 0;

while (true) {
    idade = parseInt(prompt("Digite a idade do aluno (999 para parar): "));

    //Verifica Flag de parada
    if (idade === 999) {
        break;
    }

    //Valdação simples para evitar idades negativas ou lixo
    if (idade > 0 && idade < 120) {
        soma += idade;
        contador++;
    } else {
        console.log("Idade inválida ignorada.");
    }
}

if (contador > 0) {
    let media = soma / contador;
    console.log(`Quantidade de alunos : ${contador}`);
    console.log(`Média de idade: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum dado foi inserido.");
}