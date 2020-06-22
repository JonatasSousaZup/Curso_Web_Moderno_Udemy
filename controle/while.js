function getInteiroAleatorioEntre(min, max) {
    //Math.random serve para gerar um numero randomico, numero aleatorio
    const valor = Math.random() * (max - min) + min
    // Math.floor serve para arredondar o numero
    return Math.floor(valor)
}

let opcao = 0
//enquanto a expressao passada pro while for true ele continua fazendo um loop até que ela se torne false
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a proxima')