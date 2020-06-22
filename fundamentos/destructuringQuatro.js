//operador destructuring : é uma forma de extrair os valores de certa estrutura,
//nesse exemplo é uma desestruturação de um array passado dentro de uma função
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())