// A desestruturação nada mais é do que uma nova maneira de ter acesso às propriedades e métodos de um objeto, e também uma nova maneira
// de ter acesso aos itens de uma array

// Hoje em dia nós utilizamos o dot notation para acessar métodos e propriedades. Mas também hoje em dia podemos desestruturar esse objeto
// para termos acesso aos métodos e propriedades sem precisar usar o dote notation

const pessoa = {
    nome:'Lucas',
    idade: 31,
    cidade: 'Brasilia'
}

// Para acessar por meio da desestruturação vamos criar uma nova variável, ele vai receber um objeto e depois atribuimos ao valor dessa
// nossa variável o nosso objeto anterior (pessoa). Dentro do nosso objeto nós vamos passar o nome da propriedade ou método que queremos
// acessar. Em resumo estou desestruturando o meu objeto pessoa ali de cima nessa minha variável criada

const {cidade, nome} = pessoa;

console.log(cidade)

// E se eu tiver um objeto dentro de um outro objeto, como eu faço para acessá-lo? Abaixo eu tenho um objeto (endereco) 
// dentro de outro objeto (pessoa1). Uma forma de acessar é primeiramente falando com o meu objeto endereco, onde eu irei atribuir o valor de
// pessoa1.endereco (que é o meu objeto que quero acessar, que não é o objeto total, principal)

const pessoa1 = {
    nome:'Lucas',
    idade:31,
    endereco: {
        cidade1: 'Brasília',
        estado: 'BSB'
    }
}

// Outra forma de acessar o objeto dentro de um outro objeto é da forma descrita abaixo. Em vez de usar o pessoa1.endereço. Eu chamo
// o meu objeto e dentro do meu objeto uso os : para chamar o cidade, estado, por exemplo.
// const {endereco:{cidade1, estado}} = pessoa;

const {cidade1, estado} = pessoa1.endereco;

console.log(cidade1)

// E se eu quiser desestruturar um valor que não está contido dentro do meu objeto, o que vai acontecer? Geralmente ele vai dar um undefined
// Mas como eu posso definir um valor padrão caso eu não tenha esse valor dentro do meu objeto? Abaixo eu tenho um valor altura que não está
// contido no meu objeto, nesse caso ele me retornaria undefined, porém, eu atribui um valor a ele de 1.67, então toda vez em que eu quiser
// acessar ele, caso ele não tenha em meu objeto, ele vai dar o valor que atribui a ele como padrão.

const {altura = 1.67} = pessoa;

console.log(altura)

// A desestruturação de arrays é bastante semelhante à desestruturação de objetos, porém, ao invés de nós chamarmos o valor pelo nome
// da propriedade, nós iremos chamar pela posição na lista (posição 0,1,2,3, etc.), porque nos arrays não temos métodos e propriedades

const carros = ['hb2', 'hilux', 'corola'];

// Para desestruturar um array nõs fazemos da mesma forma como desestruturamos um objeto, só que aqui levamos em consideração a ordem dos itens.
// Se damos um console.log em primeiroCarro, ele irá aparecer o hb20 por exemplo. E como fazer para chamar o item sem precisar escrevê-lo?
// Basta eu colocar uma virgula para indicar que existe um item anterior a ele. Ex: const [, segundoCarro] = carros;

const [primeiroCarro, segundoCarro] = carros