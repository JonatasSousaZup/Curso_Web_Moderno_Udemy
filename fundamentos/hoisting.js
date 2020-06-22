//efeito hoisting, mesmo declarando a variavel depois de imprimir
//não gera erro, e ela retornada como indefinida, mas a variavel existe
console.log("a =", a);
var a = 2;
console.log("a = ", a);

//isso não é possivel com let, isso gera um erro
console.log('b =', 2)
let b = 2

//traduzindo hoisting significa elevação, içamento