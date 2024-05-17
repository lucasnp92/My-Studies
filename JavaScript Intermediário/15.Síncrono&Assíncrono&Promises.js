// Síncrono -> processamento que acontece em sequência, ou seja, ordenado. Acontece em fila, então, um processo só começa quando
// o anterior acaba, e as coisas não acontecem ao mesmo tempo

// Assíncrono -> processamento que pode acontecer ao mesmo tempo.



// Promises - É uma função construtora. Existem dois possíveis resultados para uma Promise, ela é Resolvida ou Rejeitada

// Ex(Resolvida): Você vai ao supermercado e pede ao açougueuiro 1kg de carne, enquanto ele separa a carne, você vai pegar a salada,
// na volta você pega 1kg de carne que você havia pedido ao açougueiro, e ele te entrega

// Ex(Rejeitada):Você vai ao supermercado e pede ao açougueuiro 1kg de carne, enquanto ele separa a carne, você vai pegar a salada,
// na volta, o açougueiro diz que não tinha o que você havia pedido


// Promise

// Inicialmente criamos uma constante minhaPromise e depois usamos o new Promise, que é o meu construtor que utilizamos para criar
// nossas promessas, depois executamos() pois ele é um método e dentro dele chamaos uma função anônima, o arrow function =>, depois
// abrimos o bloco{}. Dentro da arrow funtion eu recebo por padrão dois argumentos, o resolve (resolvida) e o reject (rejeitada)
// Dentro do bloco eu posso ter uma condição, que será meu let condicao = false, depois coloco um if(condicao), então, se essa condicao
// for resolvida, eu chamo o meu resolve, depois eu coloco o else, onde, se a minha condicao nao for resolvida eu chamo o reject
const minhaPromise = new Promise((resolve, reject) => {
    let condicao = false;
        // Aqui eu poderia passar um código enorme, para usar as Promises

    if(condicao){
        resolve('Resolvido')
    } else{
        reject('Erro')
    }
})

// Talvez no começo eu não consiga enxergar na prática a usabilidade das promises, mas iremos aprender o 'super poder' das promises,
// que são o then o catch

// then - Vai ser um callback, uma função que vai ser executada quando a Promise for resolvida
// catch - Vai ser um callback, uma função que vai ser executada quando a Promise for rejeitada
// O que será passado para mim é o erro porque foi rejeitado, já que a minha variável let é = false, se a minha condição fosse true
// ele me passaria 'Resolvido'
minhaPromise.then((resultado) =>{
    console.log(resultado)
}).catch((error) =>{
    console.log(error)
})

// Com o tempo iremos entender mais as Promises.
