// A primeira estrutura que veremos é o if. Se um determinado for TRUE ele executa o bloco de códigos inserido nele
// se for FALSE ele simplesmente ignora.

// && --> and
// || --> or
// ! --> not

const idade = 31
const tipo = 'admin' 

const idade2 = 24

// Abaixo vemos que os dois valores colocados entram como um TRUE, já que a idade é maior que 30 e o tipo é admin 
// O operador and (&&) faz com que todos os valores precisem retornar TRUE para que o meu bloco de códigos seja executado
if (idade > 30 && tipo =='admin') {
    console.log('Ele tem mais de 30 anos E é um admin')
}

// Dieferente do && o or || basta com que apenas um valor seja TRUE para que o meu bloco de codigos execute
if (idade > 30 || tipo =='admin') {
    console.log('Minha idade é igual ou maior que 30 OU sou admin')
}

// Com o not ! de negação eu irei negar a minha expressão, então se a minha expressão for FALSE e eu negar ela, vai me retornar um TRUE
// Aqui ele não tem idade maior que 31, então seria um FALSE, porém como eu neguei essa expressão ele vai me retornar um TRUE
if (!(idade > 32) && tipo =='admin') {
    console.log('Minha idade não é igual ou maior que 32 e sou admin')
}

// A segunda estrutura que veremos é o else if. Veja o exemplo abaixo. Primeiramente ele vai executar o primeiro bloco de códigos,
// como a minha idade não é maior que 30 ele vai executar o proximo bloco de códigos com o else if. Se fosse TRUE o meu primeiro bloco,
// logo ele não tentaria executar o segundo bloco de códigos.

// E o que podemos usar quando nenhum bloco de codigos for executado? Usamos apenas o else. 
// A terceira estrutura que veremos é o else. Ele é apenas excutado quando nenhum if ou else if são executados

if (idade2 > 30) {
    console.log('Minha idade é igual ou maior que 30 anos')
} else if (idade2 > 25) {
    console.log('Minha idade é igual ou maior que 25 anos')
} else{
    console.log('Ele não tem idade mínima')
}

// E se tivermos milhares de estruturas para veririficar, iremos utilizar sempre o else if infinitas vezes? NÃO.
// Aqui entra a quarta estrutura que é o switch case. Ele faz basicamente a mesma coisa que o if, else, etc, porém de uma forma
// em que fica melhor escrita

// Aqui eu chamei o meu valor idade usando o switch, e coloquei o case para quando ele tenha o meu valor idade 20 ele execute 
//o meu bloco de códigos. O break é para simplesmente não entrar em outros casos, se ele já entrar nesse caso. Veja que abaixo coloquei
// outro case para simular que o meu código será quebrado antes de chegar no meu próximo valor.
// Eu posso criar um defaul, como no exemplo, para quando não atinger nenhuma desses valores, ele executar um bloco de códigos
const idade3 = 20

switch (idade3) {
    case 20:
        console.log('Ele tem 20 anos')
        break
    case 21:
        console.log('Ele tem 21 anos')
        break
    
    default:
        console.log('Ele não possui nenhuma das idades anteriores')
}
