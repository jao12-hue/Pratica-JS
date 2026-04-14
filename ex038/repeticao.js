let contador = 6; // Início da contagem

let resultado = ""; //String para acumular os números na mesma linha

while (contador <= 11) {
    resultado += contador + " "; // Adiciona o número e um espaço
    contador++; // Incrementa (soma 1) para não virar um loop infinito
}

console.log(resultado + "Acabou!");