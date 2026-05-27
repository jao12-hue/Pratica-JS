console.log("==== OS 10 PRIMEIROS DE FIBONACCI ====");

let t1 = 1;
let t2 = 1;
let sequencia = `${t1} -> ${t2}`;

// Com já temos os dois primeiros (1 e 1), o loop roda 8 vezes para completar 10
for (let i = 3; i <= 10; i++) {
    let t3 = t1 + t2;
    sequencia += `-> ${t3}`;

    // A mágica da troca:
    t1 = t2; // O primeiro termo vira o segundo
    t2 = t3; // O segundo termo vira o resultado da soma
}

console.log(sequencia);
console.log("---------------------------------");