const numero1 = 6;
const numero2 = 2;

// Operador ternário ele basicamente funciona para tomadas de decisão, ele é uma condicional. Aqui já começa a entrar na estrutura de condicionais.

// Primeiramente vamos colocar um valor aqui para a nossa condição, no caso abaixo colocamos um true. Logo em seguida colocamos a ? que é como se
// eu tivesse perguntando qual o valor dessa nossa condição. Depois colocamos os nossos possíveis retornos. Depois colocamos o : para que retorne
// um valor caso dê false. Em resumo, o que está antes dos : irá retornar quando for um true, e o que está depois dos : retorna false
console.log(true ? 'Retornou true' : 'Retornou false')

// Se eu colocar numero1 no lugar de true ele irá retornar para mim TRUE, porque aprendemos anteriormente que todo número diferente de 0
// é um true. O mesmo vale para se colocarmos apenas ' ' com um espaço dentro porque não seria uma string vazia.
// Agora se colocarmos um número que é igual a 0 ou '' sem nada dentro, seria uma string vazia, então ambos seriam false

console.log(numero1 ? 'Isso é um TRUE' : 'Isso é um FALSE')

// Outro exemplo é usando um alert
numero1 ? alert('Retornou TRUE') : alert('Retornou FALSE')