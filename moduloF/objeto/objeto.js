let vito = {
    nome: 'Victor',
    peso: 74,
    idade: 17,
    envelhecer(i) {
        
        if (i < 0) {
            console.log('Ficou mais novo')
            this.idade -= i
            console.log(`Ficou com ${vito.idade} anos`)
        }
        else {
            console.log('Ficou mais véi')
            this.idade += i
            console.log(`Ficou com ${vito.idade} anos`)
        }
    }

}

var teste logico = '$victor'
console.log(teste logico)
vito.envelhecer(10)
