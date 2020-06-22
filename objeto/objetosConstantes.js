// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'}

//o freeze faz com o objeto "congele", e isso faz com que voce não consiga alterar os valor desse obj
Object.freeze(pessoa)
//voce nao consegue alterar
pessoa.nome = 'Maria'
//voce nao consegue adicionar
pessoa.end = 'Rua ABC'
//voce nao consegue excluir
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
