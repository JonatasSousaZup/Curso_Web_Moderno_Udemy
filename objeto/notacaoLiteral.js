const a = 1
const b = 2
const c = 3

const obj1 = { a : a, b : b, c : c} // isso era usado antigamente
const obj2 = { a, b, c} // usado hoje em dia
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} //versão nova
console.log(obj4)

const obj5 = {
    funcao1: function() { //forma antiga
        // ...
    }, 
    funcao2() { //forma nova, não é necessário passar a palavra function
        //....
    }
}
console.log(obj5)