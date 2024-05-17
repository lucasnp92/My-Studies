// As principais funções nós veremos aqui, porém, elas também não são muito comuns de serem vistas no nosso dia-a-dia
// As funções tambem são criadas com um construtor, então ela tem acesso aos métodos e propriedades desse construtor

function retornaNome(name) {
    console.log(name)
}

// O lenght basicamente vai retornar a quantidade de parâmetros que tem a minha função. No caso como a minha função acima tem apenas um parâmetro
// ele irá me retornar o 1

retornaNome.lenght; // 2
retornaNome.name; // retornaNome

// Principais métodos

// Começa a ficar um pouco mais complexo quando nós vamos para os 3 principais métodos de funções.
// Teremos o call, o apply e o bind.

function retornaNome1(name) {
    console.log(name, this.profissao, this.cidade)
}

function retornaNome2(name) {
    console.log(name, this.profissao, this.cidade)
}

function retornaNome3(name) {
    console.log(name, this.profissao, this.cidade)
}
// O call executa a função podendo passar um novo valor para this. This é como se fosse o objeto da nossa função que faz referência à nossa função
// Veja que abaixo eu executei a minha função retornaNome1 como já conhecemos, porém, o call me permitiu passar um novo valor para o this
// quando criei o profissao e o cidade logo abaixo
retornaNome1.call({profissao: 'Programador', cidade: 'Brasília'}, 'Lucas', 31)

// O apply vai funcionar exatamente da mesma maneira que o call, a única diferença é que os valores dos parametros e propriedades da minha função
// serão passados dentro de uma array
// O apply executa a função podendo passar um novo valor para this, porém com os argumentos sendo passados em um array
retornaNome1.call({profissao: 'Programador', cidade: 'Brasília'}, ['Lucas', 31])

// O bind é muito parecido com o call, a única diferença é que ela não executa a função, ele retorna a função
// O bind retorna a função podendo passar um novo valor para this. Como ele não executa a função nós não iremos visualizá-lo no console.log, ele irá
// apenas retornar para mim a minha função com os novos valores para this, então podemos nesse caso armazenar as suas informações em uma constante
// e depois executá-lo para que possamos visualizar essa minha função.
const novaFuncao = retornaNome3.call({profissao: 'Programador', cidade: 'Brasília'}, 'Lucas', 31)

novaFuncao()