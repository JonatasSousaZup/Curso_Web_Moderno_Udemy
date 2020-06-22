const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype)
//usando __proto__ eu consigo acessar o protótipo desse objeto
console.log(ferrari.__proto__)
//um objeto criado por padrão ele sempre aponta pra Object.prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//Object.prototype não tem um prototipo depois dele
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)