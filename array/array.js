console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array( 'Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')//forma de adicionar um novo elemento no array
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
//essa função vai deixar o array de fato ordenado, assim fazendo com que 'Rafael' ocupe o indico 5
aprovados.sort()
console.log(aprovados)

//forma de deletar o elemento passado
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//serve para adicionar elementos em determinado indice
//tambem serve para remover
//tambem serve para remover e adicionar ao mesmo tempo
aprovados.splice(1, 1)
console.log(aprovados)