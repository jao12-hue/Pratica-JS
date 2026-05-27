let vetor = [];

console.log("=== GERADOR DE NÚMEROS ALEATÓRIOS ===");

for (let i = 0; i < 7; i++) {
    // Math.random() gera um número entre 0 e 1 (ex: 0.543...)
    // Multiplicamos por 100 para ter números entre 0 e 99
    // Math.floor() arredonda para baixo para termos números inteiros
    vetor[i] = Math.floor(Math.random() * 100);
}

// Exibindo o vetor final
console.log("Valores gerados: " + vetor.join(" - "));
console.log("Índices:         " + [0, 1, 2, 3, 4, 5, 6].join("    "));