const pai = { nome: 'Pedro', corCAbelo: 'preto' }
const filha1 = Object.create(pai)// obj novo tendo como prototipo o obj pai
filha1.nome = 'Ana' //adicionando um atributo ao obj criado
console.log(filha1.corCAbelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} 
    //writable como false não permite que o valor Bia seja alterado
    //enumerable permite o atributo ser listado quando usado Object.keys por exemplo 
})
console.log(filha2.nome)
filha2.nome = 'Carla' //voce nao consegue alterar o nome de Bia para Carla
console.log(`${filha2.nome} tem cabelo ${filha2.corCAbelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? //aqui verifica se o atributo pertence ao obj
    console.log(key) : console.log(`Por herança: ${key}`) // se pertencer retorna o nome do objeto, se não pertencer retorna "Por Herança" e o nome do objeto
}