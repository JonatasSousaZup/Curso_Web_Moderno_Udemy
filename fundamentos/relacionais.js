console.log('01)', '1' == 1)// == verifica se os dois valores são iguais
console.log('02)', '1' === 1)// === verifica se os valores e os tipos deles são iguais, aqui no caso é false pq um é uma string e outro é um number
console.log('03)', '3' != 3)// != verifica se os valores são diferentes sem levar em consideração o tipo deles
console.log('04)', '3' !== 3)// !== verifica se os dois valores são diferentes levando em consideração o tipo tambem

console.log('05)', 3 < 2)// < verifica se o primeiro numero é menor que o outro
console.log('06)', 3 > 2)// > verifica se o primeiro numero é maior que o outro
console.log('07)', 3 <= 2)// <= verifica se o primeiro numero é menor ou igual que o outro
console.log('08)', 3 >= 2)// >= verifica se o primeiro numero é maior ou igual que o outro

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2) 
console.log('11)', d1.getTime === d2.getTime)

console.log('12)', undefined == null)
console.log('13)', undefined === null)