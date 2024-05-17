const estoque = ['arroz', 'feijão', 'arroz', 'macarrão', 'batata','']
const precos = [3.50, 5, 3.50, 2, 2.50, 0]

// Nesta aula veremos alguns metodos de array que nos permitirão iterar algum array
// O que é uma iteração? É uma repetição de uma determinada coisa. Os métodos iteradores de array vão percorrer por todos os itens do nosso array
// e vão executar um determinado bloco de códigos (callback) para cada item, como se fosse um loop que vai executar um callback (que é uma função)
// para cada item do nosso array

// O primeiro método é o forEach, que por padrão vai receber três argumentos no callback
// O primeiro argumento é o valor atual da iteração, o segundo é o index atual da iteração e o terceiro é o array completo de todas as iterações
// Temos 6 repetições do nosso callback dentro do método forEach. Dentro do forEach, do nosso método(função), executamos outra função chamado callback e
// essa execução será executada para cada item que tivermos dentro da nossa função. Ou seja, na primeira execução, o nosso valor será igual ao arroz, na
// segunda execução será feijão, na terceira arroz, e etc.
// O forEach é uma função que não tem retorno, então o retorno dele sempre será undefined.
// É possível fazer a iteração com objetos, etc, não apenas com arrays de strings
estoque.forEach((valor, index, array) => {
    console.log(valor, index, array)
})


// O map é muito parecido com o forEach, a diferença é que ele vai ter um retorno. No forEach a gente vai alterar o nosso array principal, no map a gente
// não vai alterar, a gente vai criar um novo array. Vai retornar um valor em cada iteração, e a partir desse retorno de cada iteração a gente vai
// poder criar uma nova array. O map vai iterar sobre todos os itens do nosso array, vai retornar um novo valor para cada iteração e vamos ter um novo array
// a partir do nosso retorno
const retornoMap = estoque.map ((valor, index, array) => {
    return `${valor} ${index}`
})

// O reduce é bastante parecido com o map, a maior diferença é que no reduce teremos um parâmetro a mais no nosso callback, que é chamado de acumulador.
// O acc que é o acumulador nada mais é do que o retorno da nossa iteração anterior. Como fica então no caso da primeira iteração que não possui um
// valor anterior a ele? É ai que nós definimos um valor default, inicial, que no nosso caso é o 0 ao final.
// Podemos utilizar o reduce em qualquer tipo de array
const total = precos.reduce((acc, valor, index, array) => {
    return acc + valor
}, 0)

// O find retorna o valor da primeira iteração que for true. Então abaixo quando eu chamar a const resultado ele vai me retornar o resultado 'arroz', que é
// o primeiro valor true do meu array. Um 0, uma string vazia, são exemplos de false.
const resultado = estoque.find((valor, index, array) => {
    return valor
})

// No find index é bem similar ao find, a única diferença é que ele não retorna o valor mas o index desse valor, ou seja a posição em que se encontra esse 
// meu valor. No caso abaixo ele vai me retornar '0', onde é a posição (index), que se encontra o meu 'arroz'
const resultado1 = estoque.findIndex((valor, index, array) => {
    return valor
})

// O some vai retornar um boolean(true ou false) ao invés de um valor.
// Se eu tiver um valor pelo menos no meu array que seja um true ele irá me retornar um true. Caso eu não teenha nenhuma item no meu array que seja true,
// ele irá me retornar um false
// Colocar o arrow function na mesma linha ele já significa que o que vem após é o return, no caso abaixo, return de valor
const resultado2 = estoque.some((valor, index, array) => valor);

// Ao contrário de some, o every precisa que todos os itens do meu array sejam true para que ele me retorne um true.
const resultado3 = estoque.every((valor, index, array) => valor);

// O filter vai retornar um novo array com os itens de cada iteração que retornou um true. 
// Abaixo ele vai retornar um novo array por exemplo, com todos os itens que forem 'arroz'.
const resultado4 = estoque.filter((valor, index, array) => valor === 'arroz');