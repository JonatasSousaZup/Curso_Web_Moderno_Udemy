//Object.preventExtensions = nao permite que o objeto seja estendido, voce nao consegue aumentar o numero de atributos desse objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha' //voce consegue alterar o atributo
produto.descricao = 'Borracha escolar branca' //voce nao consegue adicionar um novo atributo
delete produto.tag //voce consegue deletar atributos
console.log(produto)

//Object.seal = voce nao consegue adicionar novos atributos e nao consegue excluir, mas consegue alterar o valor de um attr
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //isso nao da
delete pessoa.nome // isso tambem nao
pessoa.idade = 29 // isso voce consegue fazer
console.log(pessoa)

//Object.freeze = consegue alterar valor de um atributo, nao consegue deletar, nao consegue adicionar