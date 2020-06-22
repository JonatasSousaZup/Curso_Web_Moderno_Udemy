const sequencia = {
    _valor: 1, //convenção
// usar get para ler o valor de uma variavel
    get valor() { return this._valor++ },
// usar set para alterar o valor de uma variavel
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)