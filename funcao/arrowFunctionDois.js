function pessoa() {
    this.idade = 0
//usando o exemplo da aula de This, aqui nao é necessario passar um bind,
//ou até mesmo armazenar o this numa variavel, pois isso é uma vantagem
//de usar arrow function
    setInterval(() => {
       this.idade++
        console.log(this.idade)
    }, 1000)
}
new pessoa