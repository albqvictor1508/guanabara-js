var idade = 45
var agora = new Date()
var hora = agora.getHours()

console.log(`você tem ${idade} anos`)
if (idade < 16) {
    console.log(`tu é de menor otaro.`)

}
else if (idade < 18 || idade >= 65) {
        console.log('voto opcional')
    }
    else {
        console.log('voto obrigatório')
    }

    
    if (hora < 12) {
        console.log('Bom dia vagabundo!')
    }
    else if (hora < 18) {
        console.log('Boa tarde vagabundo!')
    }
    else if (hora < 23) {
        console.log('Boa noite vagabundo!')
    }
    else if (hora > 23) {
        console.log('Boa madrugada vagabundo!')
    }
    else {
        console.log('tu tem algum problema')
    }
    

