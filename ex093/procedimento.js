const prompt = require('prompt-sync')();

let ini = Number(prompt("Início: "));
let fim = Number(prompt("Fim:    "));
let inc = Number(prompt("Salto:  "));

function Contador(inicio, fim, incremento) {
    let resultado = "";

    if (inicio <= fim) {
        for (let i = inicio; i < fim; i += incremento) {
            resultado += i + " >> ";
        }
    } else {
        for (let i = inicio; i > fim; i -= incremento) {
            resultado += i + " >> ";
        }
    }

    console.log("\nRESULTADO");
    console.log(resultado + "FIM!");
}

Contador(ini, fim, inc);