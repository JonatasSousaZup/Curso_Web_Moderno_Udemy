let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
//usando duas vezes o simbolo de negação, passa a ser verdadeiro
isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)//numero inteiro
console.log(!!-1)
console.log(!!' ')//espaço em branco
console.log(!!'texto')//qualquer texto
console.log(!![])//qualquer array
console.log(!!{})//qualquer objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)//o numero 0 sempre é false
console.log(!!'')//string vazia
console.log(!!null)//nulo
console.log(!!NaN)//not a number
console.log(!!undefined)//indefinido
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(('' || null || 0 || 'epa')) //retorna o unico valor verdadeiro, que no caso é 'epa'

//se 'nome' estiver vazio, retorna 'desconhecido', senão retorna o valor da variavel nome
let nome = 'lucas'
// nome = ''
console.log(nome || 'Desconhecido')