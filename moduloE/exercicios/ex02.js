
var btn = document.getElementById('btn')
btn.addEventListener('click', tabuada)
let contador = 1

function tabuada() {
    var input = document.getElementById('input1')
let select = document.getElementById('select')
let n1 = Number(input.value)


while (contador >= 10) {
select.innerHTML = contador
contador++
}
}
