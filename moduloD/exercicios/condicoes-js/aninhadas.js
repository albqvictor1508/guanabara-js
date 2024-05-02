var agora = new Date()
var diaSem = agora.getDay()

/*
  0 = Domingo
  1 = segunda
  2 = terça
  3 = quarta
  4 = quinta
  5 = sexta
  6 = sábado
*/

switch (diaSem) {
    case 0:
        console.log('Bom domingo!')
        break
    case 1:
        console.log('Boa segunda pa nois')
        break
    case 2:
        console.log('Boa terça pa nois')
        break
    case 3:
        console.log('Boa quarta pa nois')
        break
    case 4:
        console.log('Boa quinta pa nois')
        break
    case 5:
        console.log('Boa sexta pa nois')
        break
    case 6:
        console.log('Bom sábado pa nois')
        break
        default:
            console.log('tomar no cu')
            break
}