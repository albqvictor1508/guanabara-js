var btn = document.getElementById(`btn`)
btn.addEventListener(`click`, verificar)

function verificar() {

var input1 = document.getElementById(`input1`)
var input2 = document.getElementById(`input2`)
var input3 = document.getElementById(`input3`)

var res = document.getElementById(`res`)


if (input1.value.length == 0 || input2.value.length == 0 || input3.value.length == 0) {
    window.alert('bota numero porra')
}
else if (input1.value.length == 0) {
    window.alert('falta o inicio')
    
}
}