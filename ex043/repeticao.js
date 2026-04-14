let contador = 30; // Início da contagem

let resultado = ""; // String para acumular os números na mesma linha

while(contador >= 1) {
    //Verificaçãose o resto da divisão por 4 é zero
    if(contador % 4 === 0) { 
        resultado += `[${contador}] `; // Marca o número
    } else {
        resultado += contador + " "; //Número normal
    }

    contador--;
}

console.log(resultado + "Acabou!");