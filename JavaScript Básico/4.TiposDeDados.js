// São ferramentas que utilizaremos para contruir nossos algoritmos.

// O primeiro tipo de dado que iremos estudar é a STRING. A String nada mais é do que um bloco de texto dentro de aspas ''.
//Quando queremos escrever um texto solto, nós devemos fazer em formato de string. Como faço para colocar dentro do meu
//texto uma palavra com aspas? Basta eu colocar a minha palavra com as aspas diferentes da utilizada para colocar meu texto.
//Se eu usei aspas simples para abrir, basta utilizar aspas duplas para colocar na minha palavra, ou vice versa

const NossaString = 'qualquer "elemento" coisa';

// A Concatenação de Strings seria a junção de uma String com outra. Abaixo utilizamos o sinal de + para a junção da String
// NossaString2 + OutraString

const NossaString2 = 'Lucas é';
const OutraString = 'Programador';

console.log(NossaString2 + ' ' + OutraString);

// Outra maneira de escrever dentro de uma String utilizando o JavaScript é por meio das Templates String. Podemos utilizar
// dois craseados ``, e dentro do craseado podemos chamar uma propriedade por meio do ${}
// A template string é para juntar o nosso texto junto com uma variável ou com o nosso código javascript, para facilitar a nossa escrita
// e chegar em outros resultados de maneira mais simples, etc.

console.log(`Você sabia que o Lucas é ${OutraString}`);


// O segundo tipo de dado é o NUMBER. Para ser um número devemos deixar apenas o numeral sem usar aspas nem nada.
// Existe uma forma de sabermos qual é o type daquele nosso dado, usando o TYPEOF (No console irá aparecer se aquele dado é um número,
// uma string, etc)

const numero = 3;
// Esse 2e10 significa que o número 2 será seguido de 10 números 0. 20000000000
const numero2 = 2e10
// No console.log, podemos utilizar dois ou mais valores ao mesmo tempo, no caso abaixo, usamos o typeof e pedimos a const numero2
console.log(typeof numero, numero2);


// O terceiro tipo de dado é o NULL. Não possui a ausência de valor, porém, é um valor nulo. Ele existe, todo tipo de dado em JavaScript
// é um objeto

const ValorDaCompra = null;


// O quarto tipo de dado é o UNDEFINED
// Abaixo eu não dei um valor para a minha let, então no console vai dizer que é o dado não foi definido
let valor;
console.log(typeof valor);


// O quinto tipo de dado é o BOOLEAN. Ele basicamente um verdadeiro ou falso, true or false.

const formado = false;
// Colocar o 0 significa que é False também
const faltosos = 0;
// Outro valor que também é False é o NaN (Not a Number)
const faltosos2 = NaN;
// Outro que adota o valor de False é o NULL
// Outro que também adota False é o Undefined
// Outro que adota False é o string sem nenhum caracter ''


// Itens que representam o nosso TRUE:
// String com caracter dentro (ao menos um espaço), ' ' ou 'texto'
// Number que seja diferente de 0 (até para números negativos)


