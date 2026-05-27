let vetor = [];
let linhaValores = "";
let linhaIndices = "";

// O laço percorre as 10 posições (de 0 a 9)
for (let i = 0; i < 10; i++) {
    // Lógica: o valore é o (índice + 1) multiplicado por 5
    // Ex: na posição 0 -> (0+1)*5 = 5
    // Ex: na posição 9 -> (9+1)*5 = 50
    vetor[i] = (i + 1) * 5;

    //Formatação para exibição alinhada
    // Se o número for menor que 10, adicionamos um espaço estra para alinhar com os índices
    linhaValores += vetor[i] + " ";
    linhaIndices += i + (vetor[i] >= 10? "   " : "  ");
}

console.log(linhaValores);
console.log(linhaIndices);