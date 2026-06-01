function Gerador(texto, vezes) {
    console.log("+-------=======------+");

    for (let i = 0; i < vezes; i++) {
        console.log(` ${texto} `);
    }

    console.log("+-------=======------+");
}

Gerador("Aprendendo Portugol", 4);