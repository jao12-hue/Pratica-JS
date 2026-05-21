const prompt = require('prompt-sync')();

let pagoHomens = 0;
let pagoMulheres = 0;
let resposta = "S"

do {
    let salario = parseFloat(prompt("SALARIO: "));
    let sexo = String(prompt("SEXO [M/F]: " )).toUpperCase();

    if (sexo === "M") {
        pagoHomens += salario;
    } else if (sexo === "F") {
        pagoMulheres += salario;
    }

    resposta = String(prompt("Quer continuar? [S/N]: ")).toUpperCase();
} while(resposta === "S");

console.log("\n--- RESULTADOS ---");
console.log(`Total de salários pagos aos HOMENS: ${pagoHomens.toFixed(2)}`);
console.log(`Total de salários pagos as MULHERES: ${pagoMulheres.toFixed(2)}`);