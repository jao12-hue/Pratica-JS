const prompt = require('prompt-sync')();

console.log("=== ESCOLA LA FAMILIA ===");

//Entrada das notas 
const n1 = parseFloat(prompt("Nota 1: "));
const n2 = parseFloat(prompt("Nota 2: "));

//Cálculo da media
const media = (n1 + n2) / 2;

console.log("=========================");
console.log(`MÉDIA: ${media.toFixed(1)}`);

if (media >= 7.0) {
    console.log(`APROVADO`);
} else if (media >= 5.0) {
    console.log(`RECUPERAÇÃO`);
} else {
    console.log("REPROVADO");
}
