// Basicamente, variáveis servem para guardar dados em memória. Existem três tipos de varíaveis: var, let e const
// Var e let podem ser redeclaradas (a principal diferença entre ela é de escopo, a var não utilizaremos por ser muito pouco usada)
// e a minha const eu não posso redeclarar ela, sempre terá aquele mesmo valor que foi atribuido a ela.

// Aqui estou atribuindo um valor à minha variável frase, contendo uma string (texto). Depois eu crio um alerta chamando
// a variável frase dentro do alert.
let frase = 'Essa é uma frase qualquer';
alert (frase);

// Uma variável nunca pode começar com um número. Ela pode começar com apenas esses caracteres especiais ($ ou _)

// Uma forma muito comum de escrita é utilizar o padrão de camelCase - onde a variável começa com a letra minúscula, e a segunda
// palavra começa com a letra maiúscula:
let fraseQualquer = 'Essa é uma frase qualquer'

// As variáveis elas são Case Sensitive, ou seja, ela leva em consideração letras maiúsculas e minúsculas.
// No exemplo abaixo as duas variáveis são diferentes.
let fraseQualquerDepois = 'Essa é uma frase qualquer'
let fraseQualquerdepois = 'Essa é uma frase qualquer'

// Outra forma de vermos nossos códigos é por meio do console do navegador, ver por meio de CTRL + SHIFT + I - Console
console.log(frase)

// Qual a diferença entre let e const? O let eu posso redeclarar, o const eu não posso reedeclarar
let fraseQualquer2 = 'Essa é uma simples frase'
fraseQualquer2 = 'Essa é uma outra frase, diferente da de cima'

// Ele dá um erro no dado momento em que eu chamar essa variável.
const fraseQualquer3 = 'Essa é uma frase'
fraseQualquer2 = 'Aqui acontece um erro'