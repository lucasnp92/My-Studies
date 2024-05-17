// Veremos sobre os 3 mecanismos de armazenamento de dados no Client, ou seja, no navegador.

// O JavaScript fornece esses 3 mecanismos, que são os Cookies, os de Sessão e o Local.
// https://www.tutorialspoint.com/difference-between-local-storage-session-storage-and-cookies-in-javascript#


// ARMAZENAMENTO LOCAL (LOCAL STORAGE) - Usado principalmente para a autenticação

// O Armazenamento local é o mecanismo mais recente que temos, permite que quantidade de dados maiores sejam armazenados. Porém, eles não são
// excluidos quando o navegador é fechado. É util para armazenar quando o usuário precisar acessar esses dados posteriormente de maneira offline.

// O Armazenamento local é muito usado para autenticação de usuário, quando queremos que o usuário permaneça logado no nosso site, ou seja, toda vez
// que o usuário entrar no nosso site os dados permanecerão salvos. É gerado um tokien, que por sua vez tem um tempo de expiração


// ARMAZENAMENTO DE SESSÃO

// É bem parecido com o local storage, é diferença é que quando fechamos a aba do nosso navegador os dados que estão salvos no armazenamento de sessão
// são excluidos. Enquanto se usa aquela aba do navegador os dados permanecem salvos.


// COOKIES

// São o mecanismo mais antigo e conhecido. São muitos simples e bastante suportados pelos navegadores, possuem uma baixa quantida de dados (4 kb)
// e são usados geralmente para armazenar dados que não são confidenciais, geralmente iremos armazenar as preferências de um usuário, ou alguma
// configuração, como dark theme ou white theme, etc.


// Vamos ver na prática como salvar e pegar cada valor salvo do LOCAL STORAGE
// Para salvar um arquivo no Local Storage, vamos utilizar o window(não precisamos necessariamente utilizar porque o local storage já esta dentro do windows). 
// Utilizamos o setItem para poder salvar um item, esse item tem que ter chave e valor. Abrimos o console no nosso navegador, depois clicamos na aba aplicativo e
// lá vemos o armazenamento local, cookies, etc.
localStorage.setItem('name', 'lucas');
// Como agora então pegar aquele item que em um determinado momento foi salvo em nosso navegador, por meio do getItem
console.log(localStorage.getItem('name'));


// SESSRION STORAGE - É basicamente igual ao anterior, porem usamos o sessionStorage e na aba aplicativos ele ficar em armazenamento de sessão
// sessionStorage.setItem('preferencia', 'gol');
// console.log(sessionStorage.getItem('preferencia'));


// COOKIES - Eles não estão ligados diretamente do window, mas do document (document.cookie)
document.cookie = 'name=lucas'