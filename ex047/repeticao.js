console.log("=== SOMA REGRESSIVA (500 a 0) ===");

let contador = 500; // Início
let soma = 0;       // Acumulador

while (contador >= 0) {
    soma += contador; // Acumula o valor atual

    //Mostra o processo na tela
    process.stdout.write(contador + (contador > 0 ? " + " : " "));
    contador -= 50; // Decremento de 50 em 50
}

console.log(`O resultado total da expressão é: ${soma}`);
