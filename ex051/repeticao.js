const prompt = require('prompt-sync')();

let contador = 1;
let maiorPreco = 0;
let menorPreco = 0;

// Enquanto o contador for menor ou igual a 8
while (contador <= 8) {
    let entrada = prompt(`Digite o valor do ${contador}º produto: R$`);
    let precoAtual = parseFloat(entrada.replace(',', '.'));

    // Validação de segurança
    if (isNaN(precoAtual)) {
        console.log("Por favor, digite um valor numérico válido.");
        // Não incrementamos o contador para que ele peça o mesmo produto de novo
        continue;
    }

    // Na primeira volta, inicializamos as variáves com o primeiro valor
    if (contador === 1) {
        maiorPreco = precoAtual;
        menorPreco = precoAtual; 
    } else {
        // Comparações para atualizar maior e menor
        if (precoAtual > maiorPreco) {
            maiorPreco = precoAtual;
        }
        if (precoAtual < menorPreco) {
            menorPreco = precoAtual;
        }
    }
    contador++;
}

console.log(`Relatorio Final:\nMaior Preço: R$${maiorPreco.toFixed(2)}\nMenor Preço: R$${menorPreco.toFixed(2)}`);