let sorteados = [];
let acimaDeCinco = 0;
let divisiveisPorTres = 0;

for (let i = 1; i <= 20; i++) {
    let numero = Math.floor(Math.random() * 11);
    sorteados.push(numero);

    if (numero > 5) {
        acimaDeCinco++;
    }

    if (numero !== 0 && numero % 3 === 0) {
        divisiveisPorTres++;
    }
}

console.log("Números sorteados: " + sorteados.join(", "));
console.log("====================================");
console.log("Quntidade acima de 5: " + acimaDeCinco);
console.log("Quantidade divisíveis por 3: " + divisiveisPorTres);
