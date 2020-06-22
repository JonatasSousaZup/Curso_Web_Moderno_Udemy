// closure é o escopo criado quando uma funçao é declarada
//esse escopo permite a função manipular variaveis externas á funçao

//contexto léxico em ação
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
