let contador = 10; //Início da contagem

let resultado = ""; // String para acumular os números na mesma linha

while(contador >= 3) { // Enquanto for maior ou igual ao limite
    resultado += contador + " "; // Adiciona o número e um espaço
    contador --; // Subtrai 1 a cada volta (Decremento)
}

console.log(resultado + "Acabou!");
