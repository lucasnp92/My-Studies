const array = ['gol', 'hb20', 'hilux', 'gol', 'gol']
const array2 = [3,1,2,9,5]


// lenght - Vai indicar a quantidade de itens que temos no nosso array
// unshift - Vai adicionar um novo item no início do nosso array
// shift - Vai remover o primeiro item do nosso array
// push - Vai adicionar um item no final do nosso array
// pop - Vai remover o último item do nosso array
// from - Vai transformar um array like em um array de verdade como um node list por exemplo É um método estático e só temos acesso a ela quando acessamos
    //  a nossa função construtora, que nesse caso, é o Array com 'A' maiúsculo.
// isArray - Vai retornar um booelan dizendo se isso é um array ou não. Também é um método estático então precisa ser acessado diretamente da nossa função construtora
// join - Vai unir todos os itens da nossa array em uma única string. Por padrão ele coloca uma vírgula como separador dos nossos itens. Podemos trocar esse padrão,
    // colocando qualquer outra coisa como por exemplo: console.log(array.join('e')), aqui ele vai colocar o 'e' ao invés da vírgula como padrão
// concat - Vai concatenar dois arrays. Basta eu passar o array que eu quero concatenar.
// of - É um método estático. Vai pegar os itens que colocamos separados por vírgula e vai construir um array com esses itens
// newArray - É como se estivéssemos simplesmente utilizando a nossa função construtora para construir um novo array. Passamos o new, assim como fizemos em classes
// Array - Ele cria uma nova array sem a necessidade de passar o new
// include - Vai fazer uma verificação se esse item exista ou não, depois ele vai me retornar um boolean.
// sort - Serve para ordenar arrays. Se for um array numérico ele irá colocar em ordem numérica. Tem uma maneira de fazer uma ordenação de valores não numéricos
// reverse - Vai inverter o nosso array, ela vai pegar a mesma ordem no qual ele já está ordenado, e irá colocá-lo ao contrário
// indexOf - Vai pegar o valor que a gente passou na execucação, vai identificar qual é o primeiro local em que ele está, e vai retornar um index
    // que é a posição em que ele está inserido dentro do nosso array
// lastIndexOf - Vai pegar a ultima posição no qual o valor que passei aparece, e vai retornar um index, que é a posição que ele está inserido no nosso array

// console.log(array.lenght)
// console.log(array.unshift('gol quadrado'))
// console.log(array.shift())
// console.log(array.push('gol quadrado'))
// console.log(array.pop())
// console.log(Array.from())
// console.log(array.isArray(array))
// console.log(array.join())
// console.log(array.concat(array2))
// console.log(array.of(1,2,3,4))
// console.log(new Array.(1,2,3,4))
// console.log(Array.(1,2,3,4))
// console.log(array.includes('hb20'))
// console.log(array3.sort())
// console.log(array3.reverse())
// console.log(array.indexOf('gol'))
// console.log(array.lastIndexOf('gol'))

