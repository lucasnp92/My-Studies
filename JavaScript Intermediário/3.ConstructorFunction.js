// As constructor function são funções que vão criar novos objetos com métodos e propriedades. Diferentemente da factory function,
// que retorna apenas um objeto, aqui na nossa constructor function, iremos criar uma função para construir diferentes objetos.


// Abaixo criamos uma função com nome Pessoa (Para criar uma função construtora nós usamos o padrão pascal case, com a letra maiúscula no começo)
// E o this dentro de funções serve para informar que estamos falando diretamente com a função e criando um método ou propriedade para aquela
// função construtora. Logo em seguida vamos executar nossa função para criarmos um novo objeto
function Pessoa(name, idade){
    this.nome = name;
    this.idade = idade
}

// Veja que utilizamos a palavra new antes da nossa função, ela serve para podermos criar um novo objeto a partir da nossa função construtora.
// Os métodos e as propriedades adicionados com o this são atribuidos logo em seguida para nossa variável criada, que no caso é pessoa1. No exemplo abaixo
// nós decidimos utilizar métodos e propriedades dentro de nossa função
const pessoa1 = new Pessoa('Lucas', 31);

// Criei um segundo objeto diferente com os seus respectivos dados. Como temos agora uma função podemos passar argumentos e parametros dentro da nossa função
const pessoa2 = new Pessoa('Pedrinho', 25);
