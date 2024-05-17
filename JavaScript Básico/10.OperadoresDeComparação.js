// Um operador de comparação basicamente vai comprar dois valores, e vai retornar um boolean, se é Verdadeiro ou Falso

const numero1 = 6;
const numero2 = 2;

// O primeiro comparador é o > (Maior que). Aqui ele vai me dizer se meu numero1 é maior que o meu numero2. No console ira aparecer TRUE
// porque 6 é maior que 2
console.log(numero1 > numero2); // true

// O segundo é o < (Menor que). Aqui ele vai me dizer se numero1 é menor que numero2. No caso FALSE
console.log(numero1 < numero2); // false

// O terceiro é o >= (maior ou igual que). Aqui ele vai me dizer se numero1 é maior ou igual a numero2. No caso TRUE
console.log(numero1 >= numero2); // true

// O quarto é o <= (menor ou igual que). Aqui ele vai me dizer se numero1 é menor ou igual a numero2. No caso FALSE
console.log(numero1 <= numero2); // false

// O quinto é o == (igualdade). Aqui ele vai me dizer se esses dois numeros são iguais. No caso FALSE, porque 6 é diferente de 2
console.log(numero1 == numero2); // false

// O sexto é o != (diferente). Aqui ele vai me dizer se esses dois numeros são diferentes. No caso TRUE.
console.log(numero1 != numero2); // true

// O sétimo é o === (identidade / equidade). Aqui ele vai levar em consideração o valor e o tipo de dado. No caso FALSE. Porque apesar do tipo de dados ser o mesmo,
// o valor atribuido são diferentes. Se no lugar de const numero2 fosse const numero2 = '6' (string), ele me retornaria FALSE novamente, 
// porque apesar de numero1 ter o mesmo valor de numero2, eles possuem tipos de dados diferentes, um é numero 6 o outro string '6'

console.log(numero1 === numero2); // false

// O oitavo é o !== (diferente de / não é idêntico). Aqui ele vai me dizer que esses números não são idênticos. No caso TRUE.

console.log (numero1 !== numero2); // true