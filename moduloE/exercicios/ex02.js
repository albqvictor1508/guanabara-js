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
        let resposta = n1 * c
        for(let c = 1;c <= 10; c ++) {

            select.innerHTML = `${n1} * ${c} = ${resposta}`

        }
    }
}