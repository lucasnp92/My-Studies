// É também conhecida como loops. É uma estrutura que nos permite repetir um determinado trecho de códigos por uma determinada
// quantidade de vezes.

// A primeira estrutura é o nosso for. Dentro dele tem um valor inicial, no caso abaixo colocamos nossa variável igual a zero, ele vai ter uma
// condição que vai definir se esse nosso loop vai continuar acontecendo ou não. No caso essa condição, enquanto numero for menor que 5.
// Devemos ter cuidado com os loops infinitos. Por isso colocamos um incremento para a nossa variável numero, aqui usamos o numero++
// ou seja, a cada vez que o loop rodar ele vai acrescentar um número ao nosso numero 0, chegando assim a ficar FALSE quando nossa
// variável atingir o numero 5, porque dessa forma ele já não vai ser menor que 5, e assim o nosso loop irá parar de acontecer

for (let numero = 0; numero < 5; numero++) {
    console.log(`Repetição de número ${numero}`)
}

// E se eu quiser quebrar o meu loop quando ele atingir determinado número. Nesse caso eu posso utilizar o break e criar uma estrutura
// de condicional para verificar uma determinada condição e quebrar o nosso loop. Ainda que eu tenha colocado para repetir até o numero 30
// ele irá para no número 20 porque foi onde criei a condicional para parar o meu loop.

for (let numero1 = 0; numero1 < 30; numero1++) {
    console.log(numero1)
    if(numero1 == 20){
        break
    }
}


// Podemos também construir loops para interagir com objetos e arrays.
// O primeiro é chamado de for in. O loop vai se repetir pela quantidade de chaves que temos no nosso objeto, nesse caso são 3
// então nosso loop vai se repetir por 3 vezes

const object = {
    name: 'Lucas',
    idade: 31,
    cidade: 'Brasília'
}

// Abaixo estou dizendo para que rode esse loop para todas as chaves (key, ou qualquer outro nome) do nosso objeto. (Aqui é o for in).

for (key in object) {
    console.log(key)
}
// Mas como eu posso ter acesso a cada propriedade dessa em vez de somente as chaves? Usando o object[key]. Aqui eu vou acessar
// o valor de cada propriedade (Aqui é o for in)
for (key in object) {
    console.log(object[key])
}


// O segundo é for of. Ele é bem semelhante ao for in porém ele vai rodar um loop para cada item de uma lista que a gente tem, de um array por exemplo

const array = ['Computador', 'Notebook', 'Gabinete']
for (item of array) {
    console.log(item)
}


// Por último tem os o nosso while. Ele é muito parecido com o nosso for porém escrito de uma forma diferente. A condicional ficará
// dentro do nosso while e o incremento ficará no fiinal

let numero2 = 0;

while(numero2 < 5) {
    console.log(numero2)
    numero2++
}