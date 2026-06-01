const prompt = require('prompt-sync')();

function Potencial(base, expoente) {
    if (expoente === 0) return 1;

    let resultado = 1;

    for (let i = 1; i <= expoente; i ++) {
        resultado *= base;
    }

    return resultado;
}

console.log("------- CÁLCULO DE POTÊNCIA -------");
let b = Number(prompt("Digite a base: "));
let e = Number(prompt("Digite o expoente: "));

let total = Potencial(b, e);

console.log(`\nPotencial(${b}, ${e}) vai calcular ${b}^${e} = ${total}`);
console.log("-----------------------------------")