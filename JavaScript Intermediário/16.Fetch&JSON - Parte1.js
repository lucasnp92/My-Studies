// O fetch é um método nativo do JS que retorna a resolução de uma promise, permitindo que façamos requisições HTTP.
// Então como é uma promise, podemos usar o THEN e o CATCH para interagir com essa resposta dessa interação.

// HTTP é o principal protocolo de comunicação na web, vamos utilizar essa para se comunicar na web, ou seja, por meio desse protocolo é que vamos
// conseguir enviar, receber, deletar, alterar um determinado valor.

// Até o momento só vimos Frontend. Então vamos supor que recebemos uma nova demanda de adicionar um novo usuário. Então, a partir do frontend,
// o usuário vai inserir as informações dele, através dos inputs, ou text area, ou o select, que já vimos anteriormente. Então, é por meio do
// Fetch que vamos disparar nossas requisições HTTP, o Backend irá receber os dados e vai armazenar no banco de dados, adicionando um novo
// usuário.
    // Frontend (Informações do usuário) --> fetch --> http --> backend --> banco de dados

// Como sabemos qual é o objetivo dessa requisição? Por meio dos Verbos HTTP (Iremos ver os 5 principais)
    // Verbos HTTP:
        // GET --> Quando o client solicita algum dado (Estou informando ao meu backend que eu quero trazer dados)
        // POST --> Quando queremos enviar algum dado a partir do client
        // DELETE --> Queremos deletar algum dado específico
        // PATCH --> Serve para alterar um dado mais abrangente (Alterar todos os dados de um usuário por exemplo)
        // PUT --> Quando quero alterar algum dado específico (Alterar só o nome do usuário por exemplo)

    // Desses verbos http que vemos o conceito de CRUD:
        // Create - Read - Update - Delete

// Como fazemos a comunicação entre backend, frontend?
    // Através do ENDPOINT --> Nada mais é do uma URL. Quando fazemos uma requisição para um endpoint alguma ação irá ocorrer.
    // Os responsáveis por criar os endpoints e o que cada um deve fazer, é o backend.

// Vamos ter um endpoint para criar um usuário
// Vamos ter um endpoint para deletar um usuário
// Vamos ter um endpoint para alterar dados de um usuário
    // Ou seja, para cada ação que precisamos realizar na nossa aplicação, nós vamos ter um endpoint, para tudo o que demande uma comunicação de um
    // client com um servidor


// No link a seguir é um exemplo de um endpoint público que fornece dados sobre criptoativos, e iremos fazer nossa primeira requisição na prática
    // https://api.coingecko.com/api/v3/exchange_rates

// HTTP -> Existem 4 tipos de parâmetros em uma requisição HTTP
    // Route Params
    // Query Params
    // Body Params
    // Header Params (Estes se diferenciam um pouco dos demais)
// Eles vão servir basicamente para enviar ou receber um determinado valor

// NA PRÁTICA DA PRIMEIRA REQUISIÇÃO:
    // Iremos chamar o fetch, que é um método JS, e posteriormente utilizamos o .then para interagir com essa promisse, e no resolve do then nós iremos
    // receber os dados da resolução dessa promisse, que no caso é a respota da requisição. Criamos a nossa arrow function e dentro dele vamos utilizar
    // a nomeclatura data (ele vai ser a reposta da nossa requisição). Para passar o nosso endpoint, vamos na nossa execução do nosso fetch, abrimos um string
    // e passamos nosso endpoint
fetch('https://api.coingecko.com/api/v3/exchange_rates', { mode: 'cors'}).then((data) => {
    console.log(data)
}) // Por padrão esse requisição é um GET, onde estamos puxando informações.

    // Porque ainda não é possível pegar os dados das Criptomoedas? Por causa do CORS (por isso utilizamos ele acima)

// API --> Application programming interface - Basicamente tudo o que a gente interage por meio de uma linha de comando, ou que a gente tem um
// contrato de serviço entre duas aplicações, isto é uma API. Ou seja, quando interagimos com o backend por meio de um endpoint, a gente também
// está interagindo com um API (Backend que estamos interagindo)




