const funcs = []

for (let i = 0; i < 10; i++){
    console.log(i)
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//pelo fato de let trabalhar com escopo de bloco,
//no momento em que a função é definida, ela lembrara do valor de cada indice da variavel let,
//assim retornando o seu valor original que no caso acima é 2 e 8