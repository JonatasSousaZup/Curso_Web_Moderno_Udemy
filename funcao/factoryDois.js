function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('celular', '2000'))
console.log(criarProduto('tv', '2000'))