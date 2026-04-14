let contador = 0; // Início da contagem

let resultado = ""; // String para acumular os números na mesma linha

while(contador <= 18) {
    resultado += contador + " ";// Adiciona o número e um espaço
    contador += 3; // Soma 2 a cada volta
}

console.log(resultado + "Acabou!");