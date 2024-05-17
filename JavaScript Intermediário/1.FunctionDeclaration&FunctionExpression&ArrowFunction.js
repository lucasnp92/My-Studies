// Function declaration vimos anteriormente, e segue um exemplo abaixo. Eu itlizei um parâmetro dentro da minha function

function teste(nome){
    console.log('function declaration', nome)
}

teste('Lucas')

// O Function expression basicamente funciona como o function declaration, porém nesse caso eu atribuo uma variável
// para a minha function, onde eu utilizo uma função anônima tendo em vista que o nome da minha função será o nome da
// própria variável em que eu utilizar. Eu posso passar parâmetros tambem, como o nome2 'Lucas' abaixo

const teste2 = function(nome2){
    console.log('function expression', nome2)
}

teste2('Lucas')

// É muito comum utilizar junto com o nosso function expression um arrow expression, que é basicamente uma outra forma de 
// escrever funções anônimas. Utilizamos uma seta para fazermos isso

const teste3 = (nome3) => {
    console.log('arrow function', nome3)
}

teste3('Lucas')