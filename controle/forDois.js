const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//dessa forma ele retorna todos os indices no seu array, mas nao faz tanto sentido usar isso pra array
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
//dessa forma ele retorno os atributos do seu objeto, aqui sim faz sentido usa-lo
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
