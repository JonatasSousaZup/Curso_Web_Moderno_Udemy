const pesoUm = 1.0
const pesoDois = Number('2.0')

console.log(pesoUm, pesoDois)
//aqui voce consegue saber se o valor é inteiro ou não, se for ele mostra como true
console.log(Number.isInteger(pesoUm))

const avaliacaoUm = 5.515
const avaliacaoDois = 8.841

const total = avaliacaoUm * pesoUm + avaliacaoDois + pesoDois
const media = total / pesoUm + pesoDois

//retorna o valor original
console.log(media)
//diminiu o tanto de casa decimais, meio 'arredonda' o resultado
console.log(media.toFixed(2))
//retorna o valor em formato binário
console.log(media.toString(2))
//retorna o tipo do valor, exemplo: number
console.log(typeof media)

//Number com N maiusculo é uma função, e number com n minusculo é o tipo
console.log(typeof Number)
