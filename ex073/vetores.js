let vetor = [];
let linhaIndices = "";
let linhaValores = "";

// O loop vai de 0 a 9 (10 posições)
for (let i = 0; i < 10; i++) {
    // Lógica: 9 menos o valor atual do índice
    // Quando i = 0 -> 9 - 0 = 9
    // Quando i = 9 -> 9 - 9 = 0
    vetor[i] = 9 - i;

    // Montando a visualização
    linhaValores += vetor[i] + "  ";
    linhaIndices += i + (vetor[i] >= 10? "   " : "  ");
}

console.log(linhaValores);
console.log(linhaIndices);