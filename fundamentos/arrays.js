const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
//dessa forma é undefined pois o indice nao esta indefinido no array
console.log(valores[4])

//aqui estou passando um valor para o indice 4, o mesmo que estava undefined na linha acima
valores[4] = 10
console.log(valores)

//aqui ele passa o valor 10 ao indice 10, e criaria itens vazios no meio do array
valores[10] = 10
console.log(valores)

//o length diz quantos elementos tem no array
console.log(valores.length)

//adicionar novos elementos no array usando push
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//o pop retira o ultimo elemento do array, e o array perde o valor
console.log(valores.pop())

//outra forma de deletar um elemento de um array é o delete
delete valores[0]
console.log(valores)

//em JS array é do tipo objeto
console.log(typeof valores)