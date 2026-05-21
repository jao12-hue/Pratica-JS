const prompt = require('prompt-sync')();

let numero = 0;
let soma = 0;

// While continua enquanto o número digitado NÃO for (1111)
while (numero !== 1111) {
    numero = parseInt(prompt("Digite um número: "));

    // Verificar se o número não é a flag antes de somar
    if (numero !== 1111) {
        soma += numero;
    }
}

console.log(`A soma total é igual a ${soma}`);