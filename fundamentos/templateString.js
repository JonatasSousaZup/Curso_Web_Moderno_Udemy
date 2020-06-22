const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
//com template string é possivel quebra uma string no meio, uma quebra de linha por exemplo
//e é usado com crases e nao com aspas
const template = `
    Olá
    ${nome}!`
    console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)