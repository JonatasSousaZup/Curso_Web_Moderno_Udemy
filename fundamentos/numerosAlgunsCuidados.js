//qualquer numero dividido por 0 retorna Infinity, um tipo javascript
console.log(7 / 0)
//em outras linguagens isso nao daria certo,
//mas o JS verifica se o valor passado pode ser retornado de forma numérica
//e converte o valor e automaticamente faz a divisão,
//mas deve verificar o valor passado, valores com virgula nao da certo
//apenas valores com ponto ou valores inteiros
console.log("10" / 2)
//isso nao funciona, retorna NaN
console.log('show' * 2)
//gera um numero flutuante impreciso
console.log(0.1 + 0.7)

//impossivel gerar isso
// console.log(10.toString())

console.log((10.345).toFixed(2))
