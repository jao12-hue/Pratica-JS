let vetor = [];

// Passo 1: Definir manualmente os dois primeiros elementos
// Eles são a base para qualquer cálculo da sequência
vetor[0] = 1;
vetor[1] = 1;

// Passo 2: Usar o laço "para" começa da posição 2 (o terceiro elemento)
// O loop vai até a posição 14 (totalizando 15 elementos)
for (let i = 2; i < 16; i++) {
    // Lógica: O valor atual é a soma dos dois anteriores no vetor
    vetor[i] = vetor[i - 1] + vetor[i - 2];
}

// Passo 3: Exibição formatada
let linhaValores = "";
let linhaIndices = "";

for (let i = 0; i < 16; i++) {
    linhaValores += vetor[i] + " ";
    linhaIndices += i + " ".repeat(String(vetor[i]).length);
}

console.log("Valores: " + linhaValores);
console.log("Índices: " + linhaIndices);