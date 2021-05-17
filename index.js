// 1 - crie uma função que exiba uma mensagem no console

function text(){
    console.log(`Minha primeira função`);
}
text()

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function pessoa(nome){
    console.log(`Meu nome é ${nome}`)
}

pessoa ("Amanda")

// 3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function qmsoueu (nome,idade,estilo){
    let name = nome
    let age = idade
    let style = estilo
    console.log(`Oi eu sou a ${name}, tenho ${age} anos e gosto de ouvir músicas ${style} `);
}
qmsoueu("Lara",22,"Pop")


// 4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function likes(filme,musica){
    let movie = filme
    let music = musica
    console.log(`Minha música favorita é ${music} e meu filme favorito é ${movie}`);
}

likes ("'How to lose a guy in ten days'", "'Blanco Y Negro - Malú'")


// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triple(x){
    return x*3
}

console.log(triple(1));
console.log(triple(3));





