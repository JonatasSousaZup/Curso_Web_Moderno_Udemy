function pessoa() {
    this.idade = 0
//aqui para acessar o this na funçao passada no setInterval
//voce pode usar o bind, ou pode armazenar o this numa variavel,
//e assim voce consegue referenciar o this sem que haja variação do this
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new pessoa