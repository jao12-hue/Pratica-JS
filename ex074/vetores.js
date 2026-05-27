let vetor = [];
let linhaValores = "";
let linhaIndices = "";

// O laço percorre as 10 posições
for (let i = 0; i < 10; i++) {
    // Se o índice 'i' for par (resto da divisão por 2 é 0), coloca 5
    // Se for ímpar, coloca 3
    if (i % 2 === 0) {
        vetor[i] = 5;
    } else {
        vetor[i] = 3;
    }

    // Montando a isualização alinhada
    linhaValores += vetor[i] + "  ";
    linhaIndices += i + (vetor[i] <= 10? "  " : "  ");
}

console.log(linhaValores);
console.log(linhaIndices);