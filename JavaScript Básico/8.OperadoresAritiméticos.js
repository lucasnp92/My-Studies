// Operadores aritiméticos basicamente são como vamos lidar com expressões aritiméticas dentro de javascript.
// Abaixo usamos let ao invés de const porque senão daria erro no incremento e no decremento, tendo em vista que se fosse
// uma const ele não poderia ser redeclarado, já o let pode ser redeclarado

let numero1 = 6;
let numero2 = 2;

// O Primeiro operador é o da adição. Será representado pelo +
const adicao = numero1 + numero2;
console.log(adicao);

// O segundo operador é o da subtração. Será representado pelo -
const subtracao = numero1 - numero2;
console.log(subtracao);

// O terceiro operador é da multiplicação. Será representado pelo *
const multiplicacao = numero1 * numero2;
console.log(multiplicacao);

// O quarto operador é da divisão. Ele será representado pelo /
const divisao = numero1 / numero2;
console.log(divisao);

// Temos também o operador de incremento. Ele irá incrementar um número no nosso numero anterior. Ou seja numero + 1
const incremento = numero1++;
console.log(incremento);

// Temos também o operador de decremento. Ao invés de aumentar 1 ele diminui 1.
const decremento = numero1 --;
console.log(decremento);

// Temos também o nosso modulo. Ele é responsável por exibir o resto de uma divisão. Será representado pelo %
const modulo = 20 % 6; // resposta será 2
console.log(modulo);

// Temos também o exponencial. Será um número elevado a um outro número. Será representado pelo **
const exponencial = numero1 ** numero2;
console.log(exponencial);


