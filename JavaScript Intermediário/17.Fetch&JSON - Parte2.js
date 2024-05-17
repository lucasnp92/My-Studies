// HTTP -> Existem 4 tipos de parâmetros em uma requisição HTTP
    // Route Params
    // Query Params
    // Body Params
    // Header Params

// fetch('https://api.coingecko.com/api/v3/exchange_rates', { mode: 'cors'}).then((data) => {
    // console.log(data)
// }) 

// Por padrão esse requisição é um GET, onde estamos puxando informações.

// Caso eu queira uma requisição para enviar dados de um usuário? 
    // Primeiro temos que mudar o método da minha requisição. Temos que usar o method, e depois um POST, a partir desse momento
    // a minha requisição não é mais um GET. Temos 4 parâmetros vistos na aula passada e eles servem para enviar dados de um usuário,
    // nesse caso, o mais comum de envio de dados como queremos adicionar alguma coisa é o BODY PARAMS
fetch('https://api.coingecko.com/api/v3/exchange_rates', 
{
    mode: 'cors',
    method: 'POST',
    body:{
        name: 'Lucas',
        age: '31'
    },
    headers: {

    }
}).then((data) => {
    console.log(data)
}) 

// Header Params - É por meio dele que vamos enviar informações adicionais na nossa requisição. É por meio dele que vamos enviar uma
// informação que determina qual a linguagem está sendo entendida pelo client, ou qual é a lista de métodos de HTTP que são aceitos (delete, get, etc),
// qual tipo de mídia estamos enviando por exemplo.
    // Vamos passar o header logo após o body, por exemplo, usamos uma vírgula e depois o headers

// Route Params - É uma outra forma de enviarmos dados, só que enviamos na própria URL, mas o endpoint já tem que estar preparado para receber
// determinado dado. Podemos pegar um ID de um usuário por exemplo e passar na minha URL para poder excluir ele, ao invés de ter que passa um body
    // EX: fetch('https://api.coingecko.com/api/v3/exchange_rates/837247632578(ID do usuário)

// Query Params - Ele é muito parecido com o Route Params, porém ele não vai dentro da URL propriamente dita, ela vai ao final da nossa URL
// Nós usamos uma interrogação ao final, podemos usar o '&' para poder colocar outros dados, etc
    // EX: fetch('https://api.coingecko.com/api/v3/exchange_rates?id=1253476&name=Lucas'


// Como saber se uma requisição foi bem sucedida ou não? 
    // Por meio da resposta de status http, elas são 4:
        // Sucesso (200 - 299)
        // Redirecionamento (300 - 399)
        // Erro no client (400 - 499)
        // Erro no servidor (500 - 599)

// Qual é o formato do dado que vamos receber esse formato?
    // Podemos receber de diversas formas diferentes, em HTML, documento de texto.
    // Porém o mais comum é o JSON - Onde vamos utilizar muito durante nossa carreira como programadores

// JSON - Javascript Object Notation
    // Ele é muito similar ao objeto que aprendemos no Javascript
    // É um formato de organização de dados, a diferença do JSON para o objeto normal do javascript, é que a chave do objeto JSON deve ser em formato de String
    // Comum o JSON ser extensão para arquivos também, normalmente de configurações (Pode ser extensão de arquivos .json)

// Ex de Objeto Javascript normal
const obj = {
    name: 'Lucas',
    age: 31
}

// Ex de Objeto JSON (sempre usar aspas duplas), é muito comum na requisição http o envio do dado ser em formato de string:
const obj2 = '{"name": "Lucas","age": 31}'

// Existem dois métodos JSON a serem aprendidos antes de concluir esta aula.
    console.log(JSON.parse(obj2)) // Vai transformar uma string em formato de JSON em um objeto Javascript
    console.log(JSON.stringify(obj)) // Vai transformar um objeto Javascript em um objeto JSON