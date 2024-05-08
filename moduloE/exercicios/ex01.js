var btn = document.getElementById(`btn`)
btn.addEventListener(`click`, verificar)

function verificar() {

var input1 = document.getElementById(`input1`)
var input2 = document.getElementById(`input2`)
var res = document.getElementById(`res`)


var n1 = Number(input1.value)
var n2 = Number(input2.value)

for (n1;n1 <= n2; n1++) {

    res.innerHTML = `Toma: ${n1}` 

}
}