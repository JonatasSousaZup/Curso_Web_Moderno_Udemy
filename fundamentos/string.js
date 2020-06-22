const escola = "Cod3r"

//pegar um determinado caractere dentro da string 
console.log(escola.charAt(4))
console.log(escola.charAt(5))

//pegar o codigo de um determinado caractere
console.log(escola.charCodeAt(3))

//prgar o indice de um determinado caractere
console.log(escola.indexOf('3'))

//pegando a string a partir de um determinado indice, que no caso,
//aqui está passando um indice inicial
console.log(escola.substr(1))
//e aqui um indice inicial e um indice final
console.log(escola.substring(0, 3))

//aqui concatena uma string com uma variavel, de duas formas diferentes
console.log('escola '.concat(escola).concat("!"))
console.log('escola ' + escola + '!')

//aqui voce troca o valor de um indice determinado
console.log(escola.replace(3, "e"))

//aqui voce pode quebrar uma string em um array usando o split,
//e pode tambem passar uma expressao que vai ser usada para quebrar o array
//separando cada string pela espressao passada, que aqui no caso é uma virgula
console.log('Ana, Maria, Joao'.split(','))
