let contador = 100; // Início da contagem

let resultado = ""; // String para acumular os números na mesma linha

while(contador >= 0) {
    resultado += contador + " ";// Adiciona o número e um espaço
    contador -= 5; // Subtrai 5 a cada volta
}

console.log(resultado + "Acabou!");