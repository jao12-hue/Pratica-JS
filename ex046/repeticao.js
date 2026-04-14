console.log("=== SOMA DE PARES (6 a 100)");

let contador = 6;
let soma = 0; // Este é o nosso ACUMULADOR

while (contador <= 100) {
    soma += contador; //Pega o que já tem na soma e adiciona o número atual
    contador += 2;    //Pula para o próximo número par
}

console.log(`A soma total entre 6 e 100 é: ${soma}`);