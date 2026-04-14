const prompt = require('prompt-sync')();

console.log("=== CONTADOR PERSONALIZADO ===");

// Entrada dos dados
const inicio = parseInt(prompt("Digite o primeiro Valor: "));
const fim = parseInt(prompt("Digite o último Valor: "));
let incremento = parseInt(prompt("Digite o incremento: "));

// Garantir que o incremento seja um número possitivo (evita loop infinito)
incremento = Math.abs(incremento);

let contador = inicio;
process.stdout.write("Contagem: ");

// CASO CRESCENTE (Início menor que o Fim)
if (inicio < fim) {
    while(contador <= fim) {
        process.stdout.write(contador + " ");
        contador += incremento;
    }
}

//CASO REGRESSIVO (Início maior que o Fim)
else {
    while(contador >= fim){
        process.stdout.write(contador + " ");
        contador -= incremento;
    }
}

console.log("Acabou!");
