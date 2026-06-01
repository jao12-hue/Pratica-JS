const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor: "));
let n2 = Number(prompt("Digite o segundo valor: "));

function Somador(a, b) {
    let soma = a + b;
    return soma;
}

let resultadoSoma = Somador(n1,n2);

console.log("--------------------------------------------");
console.log(`A soma entre os valores ${a} e ${b} é igual a: ${soma}`);
console.log("--------------------------------------------");