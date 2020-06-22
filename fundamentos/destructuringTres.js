//operador destructuring : é uma forma de extrair os valores de certa estrutura,
//nesse exemplo é uma desestruturação de um objeto passado dentro de uma função
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj));
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand())