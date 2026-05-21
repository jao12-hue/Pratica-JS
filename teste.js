const prompt = require('prompt-sync')();

console.log("=== CONTADOR PERSONALIZADO ===");

const inicio = parseInt(prompt("Digite o primeiro Valor: "));
const fim = parseInt(prompt("Digite o último Valor: "));
let incremento = parseInt(prompt("Digite o incremento: "));

incremento = Math.abs(incremento);

let contador = inicio;
process.stdout.write("Contagem: ");

if (inicio < fim) {
    while (contador <= fim) {
        process.stdout.write(contador + " ");
        contador += incremento;
    }
}
