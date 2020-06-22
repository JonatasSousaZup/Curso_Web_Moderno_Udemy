//aqui o valor da variavel de dentro do bloco nao sobrepõe a outra, tanto usando let quanto var
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)