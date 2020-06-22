// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'//evitar esse tipo de manipulação
const avo = { attr1: 'A' }
//usando o __proto__ aqui eu consigo referenciar o objeto avo,
//assim o objeto pai passa a ter os mesmos atributos do objeto avo.
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 324 //shadowing, esse atributo vai sobreescrever o mesmo atributo criado no objeto carro
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
//uma forma de estabelecer uma relação entre os dois objetos, ferrari tem carro como seu protótipo (mesma coisa que usar __proto__)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())