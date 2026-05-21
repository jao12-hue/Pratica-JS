let resultado = "";

// Inicialização: começa com 100
// Condição: enquanto for maior ou igual a 0
// Incremento: subtrai 10 a cada volta (i -= 10)
for (let i = 100; i >= 0; i -= 10) {
    resultado += i + " ";
}

console.log(resultado + "Acabou!");