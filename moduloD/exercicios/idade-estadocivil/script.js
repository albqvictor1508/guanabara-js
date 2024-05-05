function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('bota alguma coisa ai mermao')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var fcivil = document.getElementsByName('radcivil')
        var idade = ano - Number(fano.value)
        var genero = ''
        var estado = ''
        var img = document.createElement('img')
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/crianca-mulher.jpeg')   
            }
            else if (idade <= 18 && fcivil[0].checked) {
                img.setAttribute('src', 'imagens/NoisNoBanquin.jpeg')
            }
            else if (idade <= 21) {
                img.setAttribute('src', 'imagens/mulherjovem.jpg')
            }
            else if (idade < 51) {
                img.setAttribute('src', 'imagens/mulher.png')
            }
            else {
                img.setAttribute('src', 'imagens/veia.jpg')
            }
        }
        else if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/crianca-homem.jpeg')   
            }
            else if (idade <= 18 && fcivil[0].checked) {
                img.setAttribute('src', 'imagens/NoisNoBanquin.jpeg')
            }
            else if (idade <= 21) {
                img.setAttribute('src', 'imagens/jovem.jpeg')
            }
            else if (idade < 51) {
                img.setAttribute('src', 'imagens/gigachad.jpeg')
            }
            else {
                img.setAttribute('src', 'imagens/vei.jpg')
            }
        }
        if (fcivil[0].checked) {
            estado = 'Casado/a'
        }
        else if (fcivil[1].checked) {
            estado = 'Solteiro/a'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é:  ${genero}, ${estado} com ${idade} anos!`
        res.style.display = 'block'
        res.appendChild(img)
    }
    
}



//length conta a quantidade de caracteres no valor escrito.

/*o operador de identidade restrita (===) é recomendado pois não só iguala os valores, como também o tipo de dado.

Nesse caso é indiferente pois se trata de um input radio, mas em um input text poderia deixar mais claro pro script com que tipo de dado ele ta trabalhando*/
