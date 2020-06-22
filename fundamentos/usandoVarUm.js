{
  {
    {
      {
        var sera = "será???";
      }
    }
  }
}
//variavel dentro de um bloco que não é uma função, ela fica visivel fora do bloco
console.log(sera)

//variavel dentro de uma função, ela nao fica visivel fora dessa função
function teste() {
    var local = 123
    console.log(local)
}
teste()

//voce tambem pode ter duas variaveis com nomes iguais, desde que estajam em blocos diferentes