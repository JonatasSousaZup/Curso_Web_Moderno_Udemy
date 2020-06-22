console.log(soma(3, 4))
/*quando definida dessa forma o interpretador do JS, primeiro carrega as funcoes do arquivo,
deixa elas preparadas, e depois começa a executar o seu codigo
entao assim eu consigo chamar a funcao antes mesmo dela ser declarada,
como eu estou fazendo na linha 1*/

// function declaration
function soma(x, y) {
    return x + y
}
//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression
const multi = function mult(x, y) {
    return x * y
}
console.log(3, 4)