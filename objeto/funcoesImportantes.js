const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
//aqui eu consigo acessar todas as chave do obj
console.log(Object.keys(pessoa))
//aqui eu consigo acessar todos os valores do obj
console.log(Object.values(pessoa))
//aqui o entries retorna um array com todas as chaves e os valores
console.log(Object.entries(pessoa))

//aqui eu percorro o array usando o forEach
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//definir a propriedade de um objeto, e aqui definir algumas caracteristicas de uma propriedade
Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataDeNascimento = '01/01/2017'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
// o assign cria um objeto com todos os atributos passados para cada um dos objetos
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
