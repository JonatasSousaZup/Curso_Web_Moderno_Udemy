function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Tv',
    preco: 4589,
    desc: 0.15,
    getPreco
}
globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990, desc: 0.20
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//os parametros diretamente dentro da função call
console.log(getPreco.call(carro, 0.17, '$'))
//os parametros dentro de um array na função apply
console.log(getPreco.apply(global, [0.17, '$']))