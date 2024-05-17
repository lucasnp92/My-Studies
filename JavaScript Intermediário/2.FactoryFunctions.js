// É uma função que vai retornar um objeto quando for executada. 
// Colocamos um método (porque é uma função, se fosse qualquer outro valor seria uma propriedade ) chamado logou e chamado deslogou.
// Esse retorno é um objeto que possui dois métodos (logou e deslogou). 

const factoryFunction = (name) => {
    return {
        logou: () => alert(`o usuário ${name} logou`),
        deslogou: () => alert(`o usuário ${name} deslogou`),
    }
}

// Podemos ter acesso ao nosso metodo que é uma função e tambem executá-lo. No logou eu preciso chamar também o método logou

factoryFunction('Lucas').logou();

// Em resumo o Factory Function vai retornar um objeto e podemos ter acesso aos métodos que existirem nessa função