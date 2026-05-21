let contador = 0;
let resultado = "";

do {
    // Adiciona o número atual à string de resultado
    resultado += contador + " ";

    // Incrementa de 3 em 3 (Razão de progressão)
    contador += 3;
} while (contador <= 30);

// Exibe o resultado final com a mensagem de encerramento
console.log(resultado + "Acabou!");