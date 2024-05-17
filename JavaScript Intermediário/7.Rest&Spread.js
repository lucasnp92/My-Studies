// São duas ferramentas que nos auxiliam a deixar a escrita do nosso código mais limpa.
// O rest vai permitir que a gente pegue todos os argumentos dos nossos parametros em um função e junte tudo em uma única array.

// Primeiramente vou criar uma função e depois utilizar os '...' (ESTE É O REST) e depois eu escolho um nome para este nosso array. Este array ele vai
// conter todos os nossos argumentos que foram criados lá em baixo. Com isto eu não preciso criar parametros na minha função um por um.
// Se eu quiser posso chamar um argumento separadamente, como fiz abaixo, eu criei antes do meu rest parâmetro 'ce'.
function estados(ce,...estados){
    // como isto é um array eu posso utilizar o indice dele, para visualizar somente aquele arguemtno criado que eu desejar
    // ao utilizar o indice do meu array '0' como descrito abaixo eu irei chamar 'BSB', já que ce não faz parte do meu rest. O primeiro
    // item no meu rest (0) é 'BSB' nesse caso
    console.log(estados[0])
}

estados('CE', 'BSB', 'RJ', 'SC')

// Utilizamos o REST para que a escrita do nosso código fique bem mais limpa, mas nem sempre iremos utilizar, precisamos saber
// qual é o momento correto para utilizar o REST, se vale ou não a pena. Em resumo ele serve, a priori, para juntar todos os argumentos
// de uma função em um único array


// O SPREAD basicamente vai servir para espalharmos itens de uma determinado array ou objeto em um outro.
// Abaixo criamos duas arrays com diversos itens, carrosAltos e carrosBaixos. Em seguida criamos um array onde utilizamos os '...', que
// é o mesmo comando do rest, depois chamamos os nossos arrays, com isso o meu array carros possui todos os itens de ambos arrays criados.

const carrosAltos = ['hilux', 's10', 'pajero', 'ranger']
const carrosBaixos = ['hb20', 'gol', 'celta', 'corsa']

const carros = [...carrosAltos, ...carrosBaixos]

// O mesmo é possível fazer com um objeto. Veja o exemplo abaixo.
// Criei 3 objetos, um com nome pessoa, outro endereco e outro dados. Veja que os dois primeiros possuem propriedades dentro dele.

const pessoa = {
    nome: 'Lucas',
    idade: 31,
    profissao: 'Programador'
}

const endereco = {
    cidade: 'Brasilia',
    estado: 'DF' 
}
// Ao utilizar os '...', fazemos um spread de pessoa e de endereço, ao chamar no meu console a const dados, 
// irá aparecer todas os propriedades contidas dentro dos meus dois objetos.
const dados = {
    ...pessoa,
    ...endereco
}