// Recapitulação - No objeto nós vamos acessar os métodos e as propriedades do construtor direto do próprio construtor. No caso de string,
// number e function, usamos o dot notation e assim temos acesso a alguns métodos e propriedades.
// No caso dos objetos quando usamos o dot notation, nós acessamos os métodos e propriedades do próprio objeto, e não os que ele herda do seu construtor,
// e por isso nós vamos usar o próprio construtor para ter acesso aos métodos e propriedades nativos de um objeto

const dados = {
    name: 'Lucas',
    idade: 31
}

const endereco = {
    cidade: 'Brasília',
    estado: 'DF'
}

// O primeiro que nós veremos é o Object.assign(). Ele serve para colocar os métodos e propriedades de um objeto em um outro objeto. Vamos utilizar
// o prórprio construtor, que é o Object, e o assign é o método. O primeiro parâmetro que passamos é o objeto alvo, ou seja, o que vai receber os
// os métodos e propriedades. Veja que é o Object é o construtor, dados é o objeto que vai receber os métodos e o proriedade de endereco
// É possível fazer isso com quantos eu objetos eu quiser, basta ir acrescentando outros objetos

Object.assign(dados, endereco)
console.log(dados)

// Outra forma de fazer isso com código mais limpo seria por meio do rest, que já aprendemos anteriormente. Veja o exemplo abaixo. Basta eu colocar
// os ... depois da , e o nome do. Não precisa do assign, já que dessa forma nós espalhamos todos os itens de dados dentro do nosso objeto

    // const dados = {
    //     name: 'Lucas',
    //     idade: 31
    // }

    // const endereco = {
    //     cidade: 'Brasília',
    //     estado: 'DF',
    //     ...dados 
    // }

    // console.log(dados)

// O segundo é o Object.keys. Basicamente ele vai retornar todas as chaves de um objeto. As chaves são os nomes que estão definindo as proipriedades
// ou os métodos, por exemplo, as chaves de dados são: name e idade.
// Abaixo é o exemplo onde estou pedindo para ele me retornar as chaves do meu objeto dados. Ele irá me retornar todas as chaves em um formato de array
console.log(Object.keys(dados))


// O terceiro é o values. Ele é semelhante ao keys, porém, ao invés dele me retornar as chaves, ele irá me retornar os valores, que nesse caso serão: Lucas e 31
// Abaixo é o exemplo onde estou pedindo para ele me retornar os valores do meu objeto dados. Ele irá me retornar todas os valores em um formato de array
console.log(Object.values(dados))


// Existem muitos outros objetos, milhares, porém, estamos vendo os principais, que mais vamos usar no nosso dia-a-dia