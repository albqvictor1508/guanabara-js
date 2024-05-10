var btn = document.getElementById('btn')
btn.addEventListener('click', calcular)

function calcular() {
    var input1 = document.getElementById('input1')
    var select = document.getElementById('select')

    if (input1.value.length == 0) {
        alert('bota numero seu fudido, sem familia, nojento, imundo, asqueroso')
    }
    else {
        let n1 = Number(input1.value)
        let c

        //na tag "select" no html foi criada a tag "option", para que os dados expressos pelo loop da estrutura "for" apareçam nas opções da tag "select"

        for(c = 1;c <= 10; c += 1) {

            console.log(c)
            let resposta = n1 * c
            let item = document.createElement('option')
            item.text = `${n1} * ${c} = ${resposta}`
            select.appendChild(item)


        }
    }
}
var btn2 = document.getElementById('btn2')
btn2.addEventListener('click', divisao)

function divisao() {
    let input2 = document.getElementById('input2')
    let select2 = document.getElementById('select2')

    for (let b = 1; b <= 10; b ++) {
        let resposta2 = Number(input2.value) / b 
        let item2 = document.createElement('option')
        item2.text = `${Number(input2.value)} / ${b} = ${resposta2}`
        select2.appendChild(item2)
    }

}


//createElement cria a tag "option"

//item.text insere texto na tag option

//appendChild insere a tag "option" no select