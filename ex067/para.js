const prompt = require('prompt-sync')();

let valorFinal = parseInt("Digite um valor: ");

if (valorFinal >= 0) {
    let resultado = "Contagem: ";

    for(let i = 0; i <= valorFinal; i++) {
        if (i === valorFinal) {
            resultado += i;
        } else {
            resultado += i + ", ";
        }
    }

    console.log(resultado + ", FIM!");
} else {
    console.log("Por favor, digite um número inteir positivo.");
}