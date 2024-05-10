
var btn = document.getElementById('btn')
btn.addEventListener('click', tabuada)
let contador = 1

function tabuada() {
    var input = document.getElementById('input1')
let select = document.getElementById('select')
let n1 = Number(input.value)
let n2 = 1
let resposta = n1 * n2

for (let c = n2; n2 <= 10; n2++)

    select.innerHTML = `${n1} * ${n2} = ${resposta}`

}
