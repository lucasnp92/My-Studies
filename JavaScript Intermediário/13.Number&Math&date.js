const numero = 10
const string = '20'
const string2 = '20.9'
const numeroQuebrado = 10.8

// NUMBER. Veremos os métodos e propriedades dos construtores de números

// O primeiro é o parseFloat. Ele vai retornar para nós um número a partir de uma string.
// Vamos usar o próprio construtor de números nativos do JavaScript e depois com o dot notation acessamos o parseFloat.
// Abaixo nós passamos uma string, mas poderiamos ter passado a própria const string lá de cima
Number.parseFloat('20') // 20

// O segundo é o parseInt. Ele vai retornar um número a partir de uma string, porém aqui nós podemos decidir uma cada decimal
// Abaixo passamos a const para que ele um número a partir da string, porém eu pedi que ele passe somente a casa decimal que eu quero
Number.parseInt(string2, 10) // 20

// O terceiro é o toFixed. Ele vai arrdondar um número com base nas casas decimais.
// Abaixo nós não utilizamos o construtor nativo, iremos chamar a própria constante e depois o toFixed. Não iremos passar nesse caso o parâmetro
numeroQuebrado.toFixed() // 11

// O quarto é o toString. Ele vai retornar uma string a partir de um número.
numero.toString() // '10'



// MATH. Veremos agora o Math, que é construtor nativo do JAVASCRIPT que possui métodos e propriedades de expressões matemáticas

// O primeiro é o Math.abs. Ele vai retornar um valor absoluto. O valor absoluto ele indifere se é positivo ou negativo
// Então se eu colocar o valor -5 como no exemplo abaixo ele vai me retornar 5, porque 5 seria o valor absoluto
Math.abs(-5) // 5

// O segundo é o Math.ceil. Ele vai arredondar um valor para cima.
// Então se eu tiver o valor de 4.3 por exemplo, ele vai me retornar um 5, que é um valor acima
Math.ceil(4.3) // 5

// O terceiro é o Math.floor. Ele sempre vai arredondar para baixo.
// Então se eu tiver um 4.9 por exemplo, ele vai arrdedondar para 5
Math.floor(4.9) // 4

// O quarto é o Math.round. Ele não arredondar nem para cima nem para baixo, ele vai retornar para o número mais próximo
// Então se eu tiver o número 4.3 por exemplo, ele arredondará para o 4
Math.round(4.3) // 4

// O quinto é o Math.random. Ele vai retornar um número aleatório entre 0 e 1. Caso eu queira ampliar para que seja entre 0 e 200, por exemplo,
// eu preciso multiplicar ele por 200. Aqui ele iria me passar um número quebrado, então como eu faço para passar um número inteiro? Basta eu
// usar o toFixed visto anteriormente nessa aula. Veja o exemplo abaixo:
console.log((Math.random() * 200).toFixed())

// O sexto é Math.max. Ele vai me retornar o maior número entre os listados.
// Então se eu tiver vários números ele vai me retornar o maior dentre eles, no caso abaixo seria o 16
Math.max(2,4,6,16,7) // 16

// O sétimo é o Math.min. Ele vai me retornar o menor número dentre os listados
// No caso abaixo seria o número 4
Math.min(7,13,4,67,5) // 4



// NEWDATE. Veremos agora o new Date que é também um construtor nativo do JavaScript
// Nós inicialmente criamos uma const = new Date()

const hoje = new Date();

hoje.getDate() // Vai retornar a data de hoje (ex: 04)

hoje.getMonth() // Vai retornar qual o mês atual

hoje.getFullYear() // Vai retornar qual ano estamos

hoje.getHours() // Vai retornar qual é a hora

hoje.getMinutes() // Vai retornar quantos minutos

hoje.getDay() // Vai retornar qual o dia da semana em inglês (ex: Friday). É diferente do getDate