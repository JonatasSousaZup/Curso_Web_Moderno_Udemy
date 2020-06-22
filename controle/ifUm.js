function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()//false
seForVerdadeEuFalo(null)//false
seForVerdadeEuFalo(undefined)//false
seForVerdadeEuFalo(NaN)//false
seForVerdadeEuFalo('')//false
seForVerdadeEuFalo(0)//false
seForVerdadeEuFalo(' ')//true
seForVerdadeEuFalo('?')//true
seForVerdadeEuFalo([])//true
seForVerdadeEuFalo([1, 2])//
seForVerdadeEuFalo({})//true
seForVerdadeEuFalo(-1)//true
