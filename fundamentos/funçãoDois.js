//armazenando uma função dentro de uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 6))

//retorno implicito
const sub = (a, b) => a - b
console.log(sub(2, 1))

const imprimirDois = a => console.log(a)
imprimirDois('Legal!!!')