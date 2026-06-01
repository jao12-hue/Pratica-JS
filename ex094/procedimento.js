const prompt = require('prompt-sync')();

let termos = Number(prompt("Quantos termos de Fibonacci você quer ver? "));

function Fibonacci(t) {
    let t1 = 1;
    let t2 = 1;
    let resultado = "";

    if (t >= 1) resultado += t1 + " >> ";
    if (t >= 2) resultado += t2 + " >> ";

    for (let i = 3; i <= t; i++) {
        let t3 = t1 + t2;
        resultado += t3 + " >> ";

        t1 = t2;
        t2 = t3;
    }

    console.log("\nSEQUÊNCIA GERADA");
    console.log(resultado + "FIM!");
}

Fibonacci(termos);