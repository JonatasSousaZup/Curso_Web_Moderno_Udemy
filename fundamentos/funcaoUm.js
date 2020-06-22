//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)

//função com retorno
//aqui a variavel b tem um valor padrao que é 0
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2,3))