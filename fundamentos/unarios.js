let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

//aqui o resultado é true por conta da precedencia do código
//ou seja, a variavel num1 é igual a num2 por que o oparador de num2
//foi definido depois e o de num1 foio definido antes da variavel
//isso faz com que quando o codigo chega na variavel num2 o num1 ja está com o valor incrementado
//e num2 ainda não
console.log(++num1 === num2--)
console.log(num1 === num2)