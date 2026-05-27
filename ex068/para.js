const prompt = require('prompt-sync')();

let totalMulheres = 0;
let somaPesoMulheres = 0;
let homensMais100Kg = 0;
let homemMaiorPeso = 0;

for (let i = 1; i <= 8; i++) {
    console.log(`\nPessoa ${i}`);
    let sexo = prompt("Sexo [M/F]: ").toUpperCase();
    let peso = parseFloat(prompt("Peso (Kg): "));

    if (sexo === "F") {
        totalMulheres++;
        somaPesoMulheres += peso;
    }

    if (sexo === "M") {
        if (peso > homemMaiorPeso) {
            homemMaiorPeso = peso;
        }

        if (peso > 100) {
            homensMais100Kg++;
        }
    }
}

let mediaMulheres = totalMulheres < 0 ? somaPesoMulheres / totalMulheres : 0;

console.log(`a) Quantas mulheres foram cadastradas: ${totalMulheres}`);
console.log(`b) Quantos homens pesam mais de 100Kg: ${homensMais100Kg}`);
console.log(`c) Média de peso entre as mulheres: ${mediaMulheres.toFixed(2)}Kg`);
console.log(`d) O maior peso entre os homens: ${homemMaiorPeso.toFixed(2)}Kg`);