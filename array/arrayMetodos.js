const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um novo elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
//adicionando no indice 2, e nao removendo ninguem
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
//removendo apenas um unico elemento do indice 3
pilotos.splice(3, 1)//Massa quebrou denovo

//um novo array a partir do indice 2
const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

//começa a pegar pelo indice 1 ate o indice 4
//porem o indice 4 nao é incluso nesse array, entao ele inclui apena os indices 1, 2, 3
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)