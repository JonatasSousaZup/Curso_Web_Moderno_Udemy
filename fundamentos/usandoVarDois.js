//aqui mesmo estando blocos diferentes, o valor da segunda variavel vai sobrepor o da primeira
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)