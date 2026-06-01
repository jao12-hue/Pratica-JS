const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));
let valor3 = Number(prompt("Digite o terceiro valor: "));

function Maior(n1, n2, n3) {
    let m = n1;
    if (n2 > m) {
        m = n2;
    }

    if (n3 > m) {
        m = n3;
    }

    return m;
}

let oMaior = Maior(valor1, valor2, valor3);

console.log("\n--------------------------------")
console.log(`Entre os números ${valor1}, ${valor2}, ${valor3}:`);
console.log(`O maior valor encontrado foi: ${oMaior}`);
console.log("--------------------------------");