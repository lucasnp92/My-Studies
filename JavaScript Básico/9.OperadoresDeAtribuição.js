// Os operadores de atribuição são basicamente para atribuir um valor para alguma coisa.

// O primeiro operador de atribuição é o =. Abaixo, a const numero1, está recebendo o valor de 6 pelo operador de atribuição =
// Criei varios let para que o calculo no console fosse correto, porque ao atribuir um novo valor ao let quando chegava no proximo
// calculo ele chegava com o novo valor atribuido pelo calculo.

let numero1 = 6;
let numero2 = 3;

let numero3 = 6;
let numero4 = 3;

let numero5 = 6;
let numero6 = 3;
// O segundo operador é o +=. Primeiramente ele vai somar e depois ele vai atribuir
// x += y Aqui significa que x = x + y

const atribuicao = numero1 += numero2; // numero1 = numero1 + numero2 ----> 6 = 6 + 3
console.log(atribuicao);

// O terceiro é exatamente o de cima porém com subtração -=. 
// x -= y Aqui significa que x = x - y

const subtracao = numero3 -= numero4; // numero1 = numero1 - numero2 ----> 6 = 6 - 3
console.log(subtracao);

// O quarto é a multiplicação *=

const multiplicacao = numero5 *= numero6; // numero1 = numero 1 * numero2 ----> 6 = 6 * 3
console.log(multiplicacao);

