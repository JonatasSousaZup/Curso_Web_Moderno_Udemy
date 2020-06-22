const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//pelo fato de var nao trabalhar com escopo de bloco, o resultado sera 10,
//independente do indice