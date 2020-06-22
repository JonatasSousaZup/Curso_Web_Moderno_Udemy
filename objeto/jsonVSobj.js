const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //converter o obj em um JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3, }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3, }"))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))// converter um JSON para um objeto
//todos os atributos no formato JSON devem ser escritos com aspas duplas ""
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
//JSON suporta :
//valores numericos
//valores string
//valores booleanos
//um objeto
//arrays