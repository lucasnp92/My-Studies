// Modules basicamente é uma maneira de dividir nosso código JavaScript e permitir que arquivos compartilhem um mesmo código
// JavaScript. É usado principalmente para organizar nosso código e para separação de responsabilidades.

// Imagina que eu tenha um arquivo script principal, e eu não quero colocar todos os meus códigos dentro daquele arquivo, então
// eu posso exportar e importar os meus códigos inseridos em outro arquivo.
// Para exemplificar vamos criar um outro arquivo para demonstrar. Vamos criar uma função responsável para exibir um alerta. Precisamos
// ir no nosso arquivo HTML, pegar a tag de script, colocá-la dentro do 'body' e adicionar um novo atributo, iremos usar o type= 'module'. 
// No meu arquivo criado eu vou exportar a minha função usando o 'export' antes de function. Depois iremos importar nesse arquivo atual 
// usando o 'import', posteriormente iremos chamar a nossa função

import { alerta } from './module.js';

alerta();

// Para que funcione corretamente devemos utilizar uma extensão chamada Live Server, é necessário instalar no nosso VSCODE.
// Vamos ver como é importante o module principalmente quando formos estudar o react.

// Quando eu estiver importando apenas uma unica coisa de um arquivo eu posso usar o default por exemplo
// Nesse caso quando eu importar eu não vou precisar mais das {}. 
// Ex: import alerta from './module.js';
// alerta();

// Eu posso importar e exportar de vários arquivos diferentes, não precisa ser do mesmo.