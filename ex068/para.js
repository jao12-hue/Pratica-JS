const prompt = require('prompt-sync')();

let totalMulheres = 0;
let somaMuheres = 0;
let homensMais100Kg = 0;
let maiorPesoHomens = 0;

for (let i = 1; i <= 8; i++) {
    console.log(`\nPessoa ${i}`)
    let sexo = String(prompt("Sexo [M/F]: ")).toUpperCase();
    let peso = parseFloat(prompt("Peso (Kg): "));

    if (sexo === "F") {
        totalMulheres++;
        somaMuheres += peso;
    }

    if (sexo === "M") {
        if (peso > maiorPesoHomens) {
            maiorPesoHomens = peso;
        }

        if (peso > 100) {
            homensMais100Kg++;
        }
    }
}

let media = totalMulheres > 0 ? somaMuheres / totalMulheres : 0;

console.log(`a) Mulheres cadastradas: ${totalMulheres}`);
console.log(`b) Homens com mais de 100Kg: ${homensMais100Kg}`);
console.log(`c) Média de peso entre as Mulheres: ${media.toFixed(2)}Kg`);
console.log(`d) Mior peso entre os homens: ${maiorPesoHomens.toFixed(2)}Kg`);