const prompt = require('prompt-sync')();

let textos = String(prompt("Digite a mensgem para aparecer: "));
let vezes = Number(prompt("Quantas vezes vai repetir: "));
let bordas = Number(prompt("Tipo da borda (1, 2, 3): "));

function Gerador(texto, vezes, borda) {

    let moldura = "";

    switch (borda) {
        case 1:
            moldurra = "+-------=======------+";
            break;
        case 2:
            moldura = "~~~~~~~~:::::::~~~~~~~";
            break;
        case 3:
            moldura = "<<<<<<<<------->>>>>>>";
            break;
        default:
            moldura = "+--------------------+";
            break;
    }

    console.log(moldura);

    for (let i = 0; i < vezes; i++) {
        console.log(` ${texto} `);
    }

    console.log(moldura);
}

Gerador(textos, vezes, bordas);