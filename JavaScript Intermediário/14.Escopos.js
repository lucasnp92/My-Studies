// O escopo é basicamente o local onde um valor ou uma variável pode ser caessado ou não.

// O primeiro escopo que veremos é o escopo de funções. Primeiro ponto que veremos é que uma variável criada fora, pode ser
// acessada dentro da função. Veja que a constante criada 'valor' está fora da minha função, porém, está sendo acessada dentro da função
// O contrário é possivel? NÃO! Uma constante criada dentro de um bloco de função NÃO pode ser acessada fora da minha função
// Manter os escopos utilizados atualemnte (const e let) são uma boa prática para utilizarmos em nossos códigos, para não acontecer de vazar
// dos nossos blocos (que são o que ficam entre {})
const valor = 'Lucas';

function teste(){
    console.log(valor)
}

// Temos também o escopo de blocos que é o que está entre {}, como por exemplo o 'if'

if('Lucas') {
    const abc = 2 + 3
}