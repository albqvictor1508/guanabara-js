var btn = document.getElementById(`btn`)
btn.addEventListener(`click`, verificar)

function verificar() {

let input1 = document.getElementById(`input1`)
let input2 = document.getElementById(`input2`)
let input3 = document.getElementById(`input3`)

var res = document.getElementById(`res`)


if (input1.value.length == 0 || input2.value.length == 0 || input3.value.length == 0) {
    window.alert('bota numero porra')
}
else {
    res.innerHTML = `Contando...`
    let n1 = Number(input1.value)
    let n2 = Number(input2.value)
    let n3 = Number(input3.value)

    for(let c = n1; c <= n2; c += n3) {
        res.innerHTML += `${c} ...`
    }
    
}
}
//no for, foi criada a variável c, e nela foi dado o valor do n1, 