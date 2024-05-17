// Prototype ou protótipo é algo diretamente ligado a função. É a propriedade de funções, onde podemos criar novos métodos e propriedades dentro dele.
// Prototype nada mais é do que um objeto que temos dentro de funções e podemos criar novos métodos e propriedades dentro desee objeto.

// O exemplo abaixo mostra que os nossos dois métodos (pulou e deitou) foram criados diretamente na nossa função, mas podemos criar também dentro do nosso
// protótipo ou prototype da função
function Game(){
    this.pulou = () => alert('O personagem pulou');
    this.deitou = () => alert('O personagem deitou');
}

// Esse prototype nada mais é do que um objeto. Para adcionar um novo valor em um objeto, podemos usar o dot notation (o ponto depois de Game),
// depois falamnos o nome do nosso método ou propriedade e simplesmente atribuir um valor a ele. Aqui estamos criando um novo método dentro do nosso prototype
// da nossa função construtora acima.
Game.prototype.correu = () => alert('O personagem correu');

// Se criarmos um novo objeto usando esse construtor. La no console veremos o objeto deitou, o objeto pulou, que foram criados diretamente na nossa função
// construtora como também o objeto correu, porém, o objeto correu ele está dentro do prototype. Nós conseguimos acessar e executar ambos. Se dermos um console.log
// como fizemos abaixo em nosso novo objeto novoJogo, nós conseguimos ver os métodos e propriedades da própria função construtora e os que foram herdados
// do nosso prototype. Se dermos um novoJogo.pulou() por exemplo no nosso console, veremos o alert do nosso método.

const novoJogo = new Game();
console.log(novoJogo)

// É a partir daqui que começamos a compreender o conceite de herança em JavaScript. O JavaScript possui por padrão diversos construtores nativos da linguagem,
// ou seja, não vamos precisar criar, eles já vão vir na linguagem por padrão.
// O exemplo abaixo ilustra algo sobre a herança de métodos e propriedades que vem por padrão da linguagem, onde temos acesso a elas.
// O toUpperCase que utilizamos nada mais é do que um método nativo da linguagem que eu estou herdando do meu construtor de string 'fifa'

const meuJogo = 'fifa' 
console.log(meuJogo.toUpperCase())