// Basicamente o Async e Await é uma outra forma de lidarmos com operações assíncronas dentro do JavaScript.
// Vamos criar uma função normal e depois indicar quye dentro daquela função teremos algumas partes assíncronas e que elas devem
// ser resolvidas. Anteriormente o then para resolver uma promisse, porém, com o async e o await teremos uma escrita bem melhor e limpa

// Primeiros criamos nossa função, pegamos a nossa mesma endpoint das aulas passadas, e ao invés de usar o then, usaremos o await antes da
// promise, indicando que ela precisa ser resolvida.
// Como pegamos os valores utilizando o await por exemplo? Vamos colocar tudo dentro de uma constante, e quando a promise for resolvida ou não
// os respectivos valores vão ficar dentro de uma constante. Para que o await não dê erro, precisamos indicar que essa minha função é uma
// função assíncrona. 
// Para sabermos quando der erro no nosso async e await iremos utlizar o try, onde ele ira tentar executar o que esta dentro dele, e caso
// dê algum tipo de erro ele entra dentro do catch e mostra o erro pra gente

async function getCoinData() {
    try {
        const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates')
        // Para pegar esses valores dessa requisição e utilizar na minha aplicação eu preciso alterar para json e usar o await novamente
        const json = await data.json();
        console.log(json);

    } catch (error){
        console.log(error)
    }

}

// Aqui estamos executando a nossa função
getCoinData();

// Hoje em dia o Async e o Await são muito mais utilizados que o then