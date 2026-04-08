const prompt = require('prompt-sync')();

console.log("=== ANALISADOR DE TRIÂNGULO ===");

//Entrada dos segmentos do triângulo
const reta1 = parseFloat(prompt("Comprimento do primeiro segmento: "));
const reta2 = parseFloat(prompt("Compirmento do segundo segmento: "));
const reta3 = parseFloat(prompt("Comprimento do terceiro segmento: "));

//Cálculo matemático: O comprimento de cada lado deve ser menor que a soma dos outros 2
const podeFormar = (reta1 < reta2 + reta3) && (reta2 < reta1 + reta3) && (reta3 < reta1 + reta2);

console.log("===============================");

if (podeFormar) {
    console.log("Os segmentos PODEM formar um triângulo!");

    //Classificação do tipo de triângulo
    if (reta1 === reta2 && reta2 === reta3) {
        console.log(`EQUILÁTERO: Todos os lados iguais.`);
    } else if (reta1 !== reta2 && reta1 !== reta3 && reta2 !== reta3) {
        console.log(`ESCALENO: Todos os lados diferentes`);
    } else {
        console.log(`ISÓCELES: Dois lados iguais.`);
    }

} else {
    console.log("Os segmentos NÃO PODEM formar um triângulo.");
}
