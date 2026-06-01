const prompt = require('prompt-sync')();

function Media(n1, n2) {
    let m = (n1 + n2) / 2;
    return m;
}

function Situacao(m) {
    if (m >= 7) {
        return "APROVADO";
    } else if (m >= 5 && m < 7) {
        return "em RECUPERAÇÃO";
    } else {
        return "REPROVADO"
    }
}

console.log("------- SISTEMA ACADÊMICO -------");
let nota1 = Number(prompt("Primeira nota: "));
let nota2 = Number(prompt("Segunda nota: "));

let resultadoMedia = Media(nota1, nota2);

let statusFinal = Situacao(resultadoMedia);

console.log("------------------------------------")
console.log(`Média: ${resultadoMedia.toFixed(1)}`);
console.log(`Situação do aluno : ${statusFinal}`)
console.log("------------------------------------");