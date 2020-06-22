function getInteiroAleatorioEntre(min, max) {
    //Math.random serve para gerar um numero randomico, numero aleatorio
    const valor = Math.random() * (max - min) + min
    // Math.floor serve para arredondar o numero
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a proxima')