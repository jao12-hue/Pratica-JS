let vetor = [];
let linhaValores = "";
let linhaIndices = "";

for (let i = 0; i < 8; i ++) {
    // Preenche o vetor na posição 'i' com o valor 999
    vetor[i] = 999;

    // Monta as strings de exibição
    // Usamos 3 espaços para o índice para compensar os 3 dígitos do 999
    linhaValores += veto[i] + " ";
    linhaIndices += i + "   ";
}

console.log(linhaValores);
console.log(linhaIndices);
