// O objeto é um conjunto de informações compostas por chaves e valor, podendo ser métodos ou propriedades.
// Métodos são valores em formas de função e propriedades são valores em qualquer outro formato

// O 'completeName' é o nome da nossa propriedade ou métodos. O 'Lucas Nazareth Passos' é o valor. Essa primeira linha
// é o nosso primeiro chave e valor, e depois nós separamos ele por uma vírgula no final. Ambos são propriedades, porque
// não são uma função. E método é um valor que é uma função
// No showMessage nós criamos uma função anônima, onde a própria chave showMessage é o nome da nossa função
// Quando eu chamar o showMessage de dentro do meu objeto, ele vai executar a minha função
const Lucas = {
    completeName: 'Lucas Nazareth Passos',
    idade: 22,
    showMessage: function(){
        alert('Mensagem')
    }
}

// Como que eu faço pra acessar esses nossos valores. Por meio do 'dot notation'. É basicamente que a gente vai acessar nossos
// métodos e propriedades por meio de '.' Podemos ver o (lucas.completeName)

console.log(Lucas.completeName);
console.log(Lucas.idade);

// Como faço para acessar a nossa função? Também com o dot notation, porém, precisamos executar ela usando o ()
// Sempre que vemos esses parentesis () significa que uma função está sendo executada.
// O console.log é nada mais que uma execução de função que vai ser responsável por mostrar dentro do console do nosso navegador

console.log(Lucas.showMessage())
