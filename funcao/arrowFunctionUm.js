let dobro = function (a) {
    return 2 * a
}
//aqui voce pode sobreescrever a funçao acima, pois ela foi declarada como let,
//e usando arrow function, voce deixa ela mais enxuta, retirando a palavra function,
//e passando a setinha
dobro = (a) => {
    return 2 * a
}
//quando voce tem uma funçao de uma unica linha, voce pode retirar o corpo de funçao,
//e o return é chamado normalmente como na função abaixo
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //o parametro pode ser passado assim, voce só nao pode deixar sem os '()'
console.log(ola())
