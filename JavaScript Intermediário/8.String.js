// Veremos alguns dos principais métodos e propriedades do construtor de string.

const string = 'Linguagem Javascript';
const string2 = 'de programação';

// lenght - Vai retornar a quantidade de caracteres que temos em uma string (espaço em branco conta como caracter)
// charAt - Vai retornar o caracter que está na posição que a gente passar
// toLowerCase - Vai deixar toda nossa string com letras minúsculas
// toUpperCase - Vai deixar toda nossa string com letras maiúsculas
// endsWith - Vai retornar um boolean pra gente. Ele verifica se nossa string termina com os caracteres que a gente passou. Se sim, TRUE, se não, FALSE
// startsWith - Vai retornar um boolean pra gente. Ele verifica se nossa string começa com os caracteres que a gente passou. Se sim, TRUE, se não, FALSE
// includes - Vai verificar se a string que estamos passando está contida dentro da nossa outra string. Se sim retorna TRUE se não, FALSE
// concat - Vai unir duas strings (Podemos utilizar o + para unir strings também. Ou usando o template string. Ex: console.log(`${string} ${string2}`) )
// substring - Vai pegar um pedaço da nossa string. Temos que pegar o início e o final desse pedaço que quero pegar
// slice - Funciona como uma substring, porém aqui ele aceita números negativos, com isso pode pegar as últimas posições da minha string
// padStart - Vai aumentar a nossa string preenchendo com o caracter que nós passamos
// padEnd - Funciona da mesma forma que o padStart, porém, agora adiciona ao final da minha string o que faltar
// split - Vai cortar a nossa a nossa string com o padrão que passamos e vai construir um array. Após esse corte ele vai pegar as partes cortadas do meu string
    // e vai construir uma array como se fosse uma lista
// replace - Vai substituir uma string por outra

// console.log(string2.lenght)
// console.log(string.charAt(1))
// console.log(string.toLowerCase())
// console.log(string.toUpperCase())
// console.log(string.endsWith('Javascript'))
// console.log(string.startsWith('Javascript'))
// console.log(string.includes('Javascript'))
// console.log(string.concat(string, string2))
// console.log(string.substring(1, 3)) - Esse (1, 3) siginifica que estou pegando a posição 1 da minha string até a 3, sendo que a 3 ele corta porque é o final
// console.log(string.slice(-3)) - Esse (-3) significa que irá pegar as 3 últimas posições da minhas string
// console.log(string.padStart(25, '.')) - Esse (25, '.') significa que minha string terá agora 25 caracter e os caracter que faltar à minha string, serão colocados
    // caracteres de pontos no início da minha string até atingir 25 caracteres na minha string
// console.log(string.padEnd(25, '.'))
// console.log(string.split(' ')) - O padrão que passei é um espaço em branco. Então ele vai cortar justamente onde na minha string tem um espaço em branco e fazer
    // um array com as partes que ficaram
// console.log(string.replace('i','a')) - Esse ('i','a')) significa que ele vai substituir o primeiro 'i' que encontrar pelo 'a'
// console.log(string.)
