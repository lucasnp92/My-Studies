// O Array é basicamente uma lista repleta de valores. Sendo uma lista é chamada de vetor. Sendo uma lista de outras listas
// é chamada de matriz. Cada item da minha lista tem uma posição específica.
// As posições no array começam exatamente no 0 (index)

// Cada nome é um item do nosso array. Nessa caso aqui ele é um vetor, porque ele é unicamente uma lista de itens. (VETOR)
// Lucas está no posição 0, Diego está na posição 1, Felipe está na posição 2
const vetor = ['Lucas', 'Diego', 'Felipe'];

// Para que eu veja no console exatamente o nome que eu quiser, eu devo colocar a posição dela no nosso console.log
console.log(vetor[0]);

// No caso de uma matriz, vai ser um array de arrays. Dentro deles eu vou ter outras listas (MATRIZ)
const matriz = [
    ['honda', 'toyota', 'hyundai'],
    ['carro', 'bicicleta', 'bola'],
    ['Lucas', 'Caio', 'Hugo']
]

// Aqui ele vai mostrar os valores honda, toyota e hyundai. Porque essa lista está na posição 0
console.log (matriz[0]);