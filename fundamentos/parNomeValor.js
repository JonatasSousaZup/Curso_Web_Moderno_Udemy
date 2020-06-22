//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //constexto léxico
    return saudacao
}

//objetos sao grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: '32',
}

console.log(saudacao)
console.log(exec())
console.log(cliente)