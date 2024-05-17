// O que é uma função? É basicamente um bloco de códigos que pode ser executado em determinados momentos.

// O bloco de códigos de uma função não é executado a todo momento, ele é executado apenas quando é chamado.
// Para chamar a função é necessário executá-lo
function minhaFuncao(){
    console.log('Acionou a função');
}
// Aqui eu estou chamando a minha função, que é o bloco criado acima, a partir daqui é que essa minha função
// irá aparecer em meu console. Ela foi DECLARADA e CHAMADA
minhaFuncao();

// As nossas funções podem ter PARAMETROS e ARGUMENTOS. Um parametro é um valor que eu vou passar que é variável e que
// depois eu posso passar um argumento na execuação da minha função para alterar o meu valor.
// É possível ter vários Parâmetros por função, abaixo temos message (1) e userName (2), dois parâmetros numa mesma função
function minhaFuncao2(message, userName){
    console.log(message, userName);

    // É possível colocar um retorno na nossa função, que basicamente fará com que a minha função acabe, ou seja, tudo o que
    // for colocado depois do meu return não irá funcionar, porque o código encerrará ali e retornará.
    // Utilizaremos o return para quando quisermos principalmente fazer uma diferenciação de uma execução para outra, se eu quiser
    // retornar o username quando minha função for executada é só eu colocar meu parametro no return, veja a baixo
    return userName

    //Por padrão a nossa função tem o return como Undefined
}
// Como eu não estou excutando a minha função, no console ele irá mostrar toda a descrição da minha função
console.log(minhaFuncao2)
// Aqui a minha função foi executada 3x. Veja que abaixo existem dois argumentos, ex: 'Primeira Mensagem' (1), 'Lucas' (1)
// Os argumentos dos meus parâmetros precisam estar na mesma ordem que está na minha função
minhaFuncao2('Primeira mensagem', 'Lucas');
minhaFuncao2('Segunda mensagem', 'Pedro');
minhaFuncao2('Terceira mensagem', 'João');


// Aqui está minha função com o template string ``, com o parâmetro nameUser, retornando o argumento passado a baixo 'Lucas'

function minhaFuncao3(nameUser){
    return `${nameUser} é um programador` 
}
// Aqui estou executando a minha função, passando o nome 'Lucas' como argumento para o meu parâmetro nameUser
console.log(minhaFuncao3('Lucas'));