const prompt = require('prompt-sync')();

function somador(a, b) {
    const resultado = a + b;
    console.log("-----------------------");
    console.log(`A soma entre ${a} e ${b} é: ${resultado}`);
    console.log("-----------------------");
}

let n1 = Number(prompt("Digite o primeiro valor: "));
let n2 = Number(prompt("Digite o segundo valor: "));

somador(n1, n2);
