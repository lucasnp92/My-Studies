// Classes nada mais é do que um outra maneira de escrever funções construtoras. Utilizamos uma palavra reservada 'class' e depois damos
// um nome à nossa classe. Em classes é importante começar a palavra com a letra maiúscula (Pascal Case). Aqui abrimos a nossa classe
// utilizando diretamente chaves, ao invés de parêntesis.

// Nas classes não temos mais os parêntesis para passarmos nossos parâmetros. Nesse caso temos um método padrão chamado 'constructor', e nele
// é onde vamos passar os nossos parâmetros. Vamos utilizar o 'this' para termos acesso a esses valores da nossa class. Vamos criar também nossas propriedades

// Diferentemente como nas aulas anteriores, aqui nós utilizamos o constructor para criar nossas propriedades e parâmetros ao invés de criar dentro da nossa função
// Já os métodos nós iremos criar diretamente dentro da nossa classe. O this dentro da classe faz referencia ao objeto criado.
class Pessoa {
    constructor(name, idade){
        this.name = name
        this.idade = idade
        this.cidade = 'Brasilia'
    }

    // Aqui é um exemplo mostrando que criamos o nosso método dentro da nossa classe. Aqui também temos acesso as propriedades dentro desse
    // nosso método, caso desejarmos, veja o exemplo abaixo onde inserimos um template string `${}`.
    andou(){
        alert(`${this.name} andou`)
    }
}

// Para criarmos um novo objeto é exatamente da mesma forma como nas funções construtoras, não muda nada.
// Aqui eu crio um novo objeto a partir da minha classe.
const pessoa1 = new Pessoa('Lucas', 31);

// Assim como o 'this', que é uma palavra reservada, temos outras palavras, uma delas é o 'static, quando utilizamos ela o nosso método só poderá
// ser acessado pelo próprio construtor, no caso a classe, ou seja, objetos criados a partir daquele construtor não vão ter acesso àquele método criado
// pelo static. Abaixo colocamos um static na frente do nosso método, então os objetos criados a partir do nosso construtor não vão ter acesso a eles.

class Pessoa2 {
    constructor(name1, idade1){
        this.name1 = name1
        this.idade1 = idade1
        this.cidade1 = 'Brasilia'
    }
    // Ao digitar no meu console o pessoa2.caiu() ele retorna um erro porque não consigo acessar ao meu método caiu a partir do meu novo objeto
    // pessoa2, porque estou utilizando o static no meu método. Agora se eu digitar Pessoa2.caiu() eu consigo acessar porque estou acessando
    // direto do meu construtor que é Pessoa2.
    static caiu(){
        alert(`${this.name1} caiu`)
    }
}

const pessoa3 = new Pessoa2('Joãozinho', 22)

// Uma outra coisa que podemos fazer em JavaScript é que podemos extender uma classe de outra classe, como se ela fosser uma ramnificação da
// classe principal. A classe extendida tem acesso aos métodos e propriedades da classe a qual ela foi extendida

class Mamifero {
    constructor(patas){
        this.especie = 'Mamiferos'
    }

    dormir(){
        alert('Esse mamífero dormiu')
    }
}

// Aqui nós criamos a classe Person que está extendendo a partir de mamífero, então vou ter acesso aos métodos e propriedades dela.

class Person extends Mamifero{
    constructor(){
        super(patas);
    }
    // Outra palavra reservada que vamos usar dentro de classes é o 'super', que serve para falarmos com algum método ou propriedade presente
    // na nossa classe de origem, que foi utilizada para extender outra classe. Utilizamos normalmente quando temos dois métodos com nomes iguais
    // nas duas classes, e queremos falar apenas com o método da classe de origem.
    // Utilizamos o super também para extendermos o método construtor. Então quando uma classe é extendida ela tem que chamar o super dentro do construtor. 
    // Veja acima, e caso a gente queira acessar os parâmetros podemos passar o nosso parâmetro dentro do nosso super.
    dormir(){
        super.dormir();
    }

    correu(){
        alert('Esse mamífero correu')
    }
}

