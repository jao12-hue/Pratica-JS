const prompt = require('prompt-sync')();

function SuperSomador(n1, n2) {
    let soma = 0;
    let sequencia = "";

    let inicio = n1 < n2 ? n1 : n2;
    let fim = n1 > n2 ? n1 : n2;

    for (let i = inicio; i <= fim; i++) {
        soma += i;

        if (i === fim) {
            sequencia += i;
        } else {
            sequencia += i + " + ";
        }
    }

    return { resultado: soma, texto: sequencia };
}

let v1 = Number(prompt("Digite o valor inicial: "));
let v2 = Number(prompt("Digite o valor final: "));

let operacao = SuperSomador(v1, v2);

console.log(`\nSuperSomador(${v1}, ${v2}) vai somar ${operacao.texto} e vai retornar ${operacao.resultado}`);