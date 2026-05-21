const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um valor para ver sua tabuada: "));

console.log(`\nTabuada do ${numero}`);
console.log("------------------");

for (i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

console.log("-------------------");